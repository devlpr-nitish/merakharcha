package models

import "time"

type Group struct {
	ID	uint `json:"id" gorm:"primaryKey;autoIncrement"`
	Name	string `json:"name" gorm:"not null"`
	CreatedBy uint `json:"created_by" gorm:"not null"`
	CreatedAt time.Time `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt time.Time `json:"updated_at" gorm:"autoCreateTime"`
	Members []User	`gorm:"many2many:group_members;"`
}