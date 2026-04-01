import { renderHook, act, waitFor } from '@testing-library/react'
import useAuth, { API_AUTH } from '@/hooks/useAuth'
import axios from 'axios'
import { redirect } from 'next/navigation'
// import { number } from 'zod'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}))

beforeEach(() => {
    jest.clearAllMocks()
})


// login()-----------------------------------------------------------------

describe('useAuth Hook Login', () => {

    it('должен успешно выполнить вход и перенаправить пользователя', async () => {

        const mockLoginData = { email: 'test@example.com', password: '12345678' }
        
        mockedAxios.post.mockResolvedValue({ status: 200 })

        
        const { result } = renderHook(() => useAuth())
        
        await result.current.login(mockLoginData)

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${API_AUTH}/login`,
            {...mockLoginData}
        )

        expect(redirect).toHaveBeenCalledWith('/profile')
    })

    it('должен обработать ошибку при входе', async () => {

        const mockLoginData = { email: 'test@example.com', password: 'wrong' }
        const mockError = new Error('Unauthorized')

        mockedAxios.post.mockRejectedValue(mockError)

        const { result } = renderHook(() => useAuth())

        await expect(result.current.login(mockLoginData)).rejects.toThrow('Unauthorized')

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(redirect).not.toHaveBeenCalled()
    })
})

// registration()-----------------------------------------------------------------

describe('useAuth Hook registration', () => {

    it('Должна успешно пройти регистрация перенаправление пользователя', async () => {

        const mockRegisterData = {
            name:'Сергей', 
            email: 'test@example.com',
            phoneNumber:'+79002209614', 
            birthDate: '2007-05-12',
            password: '12345678',
        }
        
        mockedAxios.post.mockResolvedValue({ status: 200 })

        
        const { result } = renderHook(() => useAuth())
        
        await result.current.registration(mockRegisterData)

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(mockedAxios.post).toHaveBeenCalledWith(
            `${API_AUTH}/registration`,
            {...mockRegisterData}
        )

    })

    it('Должен обработать ошибку при входе', async () => {
    

        const mockRegisterData = {
            name:'Сергей', 
            email: 'test@example.com',
            phoneNumber:'+79002209614', 
            birthDate: '2015-05-12',
            password: '12345678',
        }

        const mockError = new Error('Unregistration')

        mockedAxios.post.mockRejectedValue(mockError)

        const { result } = renderHook(() => useAuth())

        await expect(result.current.registration(mockRegisterData)).rejects.toThrow('Unregistration')

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
    })
})

// emailVerify()-----------------------------------------------------------------

describe('useAuth Hook emailVerify', () => {

    it('Должна успешно пройти подтверждение почты', async () => {

        const mockEmailAuthData = 123456;
		
        mockedAxios.post.mockResolvedValue({ 
            data:{
                emailVerificationStatus: 'success'
            },
            status: 200 
        })


        const { result } = renderHook(() => useAuth())
        

        await result.current.emailVerify(mockEmailAuthData)
        
        await waitFor(() => expect(result.current.emailVerificationStatus).toBe('success'))

		expect(mockedAxios.post).toHaveBeenCalledTimes(1);
		expect(mockedAxios.post).toHaveBeenCalledWith(
			`${API_AUTH}/emailVerify`,
			{ authCode: mockEmailAuthData }
		);

		expect(redirect).toHaveBeenCalledWith('/profile');
	});

    it('Должен обработать ошибку при входе', async () => {
    
        
        const mockEmailAuthData = 111111

        const mockError = new Error('Unveryfi')

        mockedAxios.post.mockRejectedValue(mockError)

        const { result } = renderHook(() => useAuth())

        expect(result.current.emailVerify(mockEmailAuthData)).rejects.toThrow('Unveryfi')

        expect(mockedAxios.post).toHaveBeenCalledTimes(1)
        expect(redirect).not.toHaveBeenCalled()
    })
})