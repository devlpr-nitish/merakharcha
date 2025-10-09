package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)



type Config struct{
	AppPort string
	DBUrl	string
	JWTSecret	string
}

func LoadCofig() *Config{
	err := godotenv.Load();

	if err != nil{
		log.Println(".env not found");
	}

	config := &Config{
		AppPort: getEnv("APP_PORT", "8080"),
		DBUrl: getEnv("DB_URL", ""),
		JWTSecret: getEnv("JWT_SECRET", "nitishkasecret"),
	}

	return config;
}

func getEnv(key , defaultVal string) string{
	if value, exists := os.LookupEnv(key); exists{
		return value;
	}

	return defaultVal;
}