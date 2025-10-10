package routes

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/handlers"
	"github.com/labstack/echo/v4"
)



func HealthRoutes(e *echo.Echo) {
	e.GET("/health", handlers.Welcome)
}


// Authentication routes
func AuthRoutes(e *echo.Echo){

	authGroup := e.Group("/auth");

	authGroup.POST("/register", handlers.Register);
}



