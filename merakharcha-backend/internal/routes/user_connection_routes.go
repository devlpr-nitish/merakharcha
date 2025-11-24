package routes

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/handlers"
	"github.com/devlpr-nitish/merakharcha-backend/internal/middleware"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/labstack/echo/v4"
)

func UserConnectionRoutes(e *echo.Echo) {
	route := e.Group("/api", middleware.JWTAuthMiddleware)

	db := db.GetDB()

	conn_repo := repository.NewUserConnectionRepository(db)
	conn_service := services.NewUserConnectionService(conn_repo)
	conn_handler := handlers.NewUserConnectionHandler(conn_service)

	route.POST("/connection/:other_user", conn_handler.AddConnection)
	route.GET("/connections", conn_handler.GetConnections)
	route.DELETE("/connection/:other_user", conn_handler.DeleteConnection)
}
