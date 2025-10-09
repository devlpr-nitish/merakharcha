package routes

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/handlers"
	"github.com/labstack/echo/v4"
)

func RegisterRoutes(e *echo.Echo){
	
	e.POST("/auth/register", handlers.Register())
}