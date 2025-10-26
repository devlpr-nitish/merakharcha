package db

import (
	"log"
	"github.com/devlpr-nitish/merakharcha-backend/internal/config"
	"github.com/devlpr-nitish/merakharcha-backend/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect(cfg *config.Config) *gorm.DB {

	dbUrl := cfg.DBUrl

	if dbUrl == "" {
		log.Fatal("Database url not found")
	}

	db, err := gorm.Open(postgres.Open(dbUrl), &gorm.Config{})

	if err != nil {
		log.Fatalf("Failed to open DB connection: %v", err)
	}

	err = db.AutoMigrate(&models.User{}, &models.Group{}, &models.Expense{}, &models.ExpenseParticipant{}); 

	if err != nil {
		log.Fatalf("Failed to migrate models: %v", err)
	}

	DB = db

	log.Println("Db connected")

	return db
}

func GetDB() *gorm.DB {
	return DB
}
