import LoginForm from '@/app/components/login-form'
import LoginInfo from '@/app/components/login-info'

export const metadata = {
  title: 'Login - Merakharcha',
  description: 'Log in to your Merakharcha account and manage your shared expenses',
}

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      
      <LoginForm />
      
      <div className="hidden lg:block bg-gradient-to-br from-primary to-primary/80">
        <LoginInfo />
      </div>
    </div>
  )
}
