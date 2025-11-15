package main

import (
	"log"

	"github.com/devlpr-nitish/merakharcha-backend/internal/config"
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/routes"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	cfg := config.LoadConfig()

	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders: []string{"Content-Type", "Authorization"},
	}))

	database := db.Connect(cfg)

	// Close underlying *sql.DB when app exits
	sqlDB, err := database.DB()
	if err != nil {
		log.Fatalf("Failed to get underlying sql.DB: %v", err)
	}

	defer sqlDB.Close()

	routes.HealthRoutes(e)
	routes.AuthRoutes(e)
	routes.UserRoutes(e)
	routes.ExpenseRoutes(e)
	routes.GroupRoutes(e)

	log.Printf("Server is running on http://localhost:%s", cfg.AppPort)
	e.Logger.Fatal(e.Start(":" + cfg.AppPort))
}
