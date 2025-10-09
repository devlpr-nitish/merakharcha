package main

import (
	"log"

	"github.com/devlpr-nitish/merakharcha-backend/internal/config"
	"github.com/devlpr-nitish/merakharcha-backend/internal/db"
	"github.com/devlpr-nitish/merakharcha-backend/internal/routes"
	"github.com/labstack/echo/v4"
)




func main(){
	cfg := config.LoadCofig();

	e := echo.New();

	database := db.Connect(cfg)

	defer database.Close();

	routes.RegisterRoutes(e);

	log.Printf("Server is running on http://localhost:%s", cfg.AppPort)
	e.Logger.Fatal(e.Start(":" + cfg.AppPort))
}