'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRedirectTo } from "@/app/hooks/useRedirectTo"


export default function LoginForm() {
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: '',
    })
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [isLoading, setIsLoading] = useState(false)
    const { redirectTo } = useRedirectTo();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.usernameOrEmail.trim()) {
            newErrors.usernameOrEmail = 'Username or email is required'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newErrors = validateForm()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setIsLoading(true)

        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifier: formData.usernameOrEmail,
                    password: formData.password,
                }),
            })

            const data = await res.json();

            if (!data.success) {
                toast.error(data.error?.details || "Login failed")
                setIsLoading(false)
                return
            }

            toast.success("Logged in successfully!")
            
            localStorage.setItem("token", data.data.token)

            redirectTo("/", 500)

        } catch (error) {
            toast.error("Server error, please try again")
        }

        setIsLoading(false)
    }


    return (
        <div className="flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Log in to your Merakharcha account</p>
                </div>

                {/* Form Card */}
                <Card className="p-6 border border-border">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username or Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="usernameOrEmail" className="text-sm font-medium text-foreground">
                                Username or Email
                            </Label>
                            <Input
                                id="usernameOrEmail"
                                name="usernameOrEmail"
                                type="text"
                                placeholder="Enter your username or email"
                                value={formData.usernameOrEmail}
                                onChange={handleChange}
                                className="w-full"
                                disabled={isLoading}
                            />
                            {errors.usernameOrEmail && (
                                <p className="text-sm text-destructive">{errors.usernameOrEmail}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full"
                                disabled={isLoading}
                            />
                            {errors.password && (
                                <p className="text-sm text-destructive">{errors.password}</p>
                            )}
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link href="#" className="text-sm text-primary hover:underline font-semibold">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </Button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <Link href="/register" className="text-primary hover:underline font-semibold">
                                Create one
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
