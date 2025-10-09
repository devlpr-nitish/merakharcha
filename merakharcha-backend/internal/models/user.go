package models

import "time"

type User struct{
	ID uint `json:"id" gorm:"primaryKey;autoIncrement"`
	Username string `json:"username" gorm:"unique; not null"`
	Email string `json:"email" gorm:"unique; not null"`
	Password string `json:"-" gorm:"not null"`
	Name string `json:"name"`
	CreatedAt time.Time `json:"created_at" gorm:"autoCreateTime"`
	UpdateAt time.Time `json:"updated_at" gorm:"autoUpdateTime"`
}