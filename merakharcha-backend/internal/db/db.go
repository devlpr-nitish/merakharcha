package db

import (
	"database/sql"
	"log"

	"github.com/devlpr-nitish/merakharcha-backend/internal/config"
)

func Connect(cfg *config.Config) *sql.DB {

	dbUrl := cfg.DBUrl

	if dbUrl == ""{
		log.Fatal("Database url not found");
	}

	db, err := sql.Open("postgres", dbUrl)

	if err != nil {
		log.Fatalf("Failed to open DB connection: %v", err)
	}

	if err := db.Ping(); err != nil{
		log.Fatalf("Failed to ping DB: %v", err)
	}

	log.Println("Db connected")

	return db
}