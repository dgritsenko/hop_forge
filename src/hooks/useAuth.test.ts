import { renderHook } from '@testing-library/react'
import useAuth, { API_AUTH } from '@/hooks/useAuth'
import axios from 'axios'
import { redirect } from 'next/navigation'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('next/navigation', () => ({
    redirect: jest.fn(),
}))

beforeEach(() => {
    jest.clearAllMocks()
})

// const {
//     login
// } = useAuth()

describe('useAuth Hook', () => {
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