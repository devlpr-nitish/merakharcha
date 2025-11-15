import RegisterForm from "@/app/components/register-form"
import RegisterInfo from '@/app/components/register-info'

export const metadata = {
  title: 'Register - Merakharcha',
  description: 'Create your account and start splitting expenses effortlessly',
}

export default function Register() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      
      <RegisterForm />
      
      
      <div className="hidden lg:block bg-gradient-to-br from-primary to-primary/80">
        <RegisterInfo />
      </div>
    </div>
  )
}
