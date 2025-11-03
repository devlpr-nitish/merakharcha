package routes

import (
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/handlers"
	"github.com/devlpr-nitish/merakharcha-backend/internal/middleware"
	"github.com/devlpr-nitish/merakharcha-backend/internal/repository"
	"github.com/devlpr-nitish/merakharcha-backend/internal/services"
	"github.com/labstack/echo/v4"
)



func GroupRoutes(e *echo.Echo) {
	route := e.Group("/api", middleware.JWTAuthMiddleware)

	db := db.GetDB()

	group_repo := repository.NewGroupRepository(db)
	group_service := services.NewGroupService(group_repo)
	group_handler := handlers.NewGroupHandler(group_service)

	route.POST("/group", group_handler.CreateGroup)
}