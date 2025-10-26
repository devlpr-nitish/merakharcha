package models


type ExpenseParticipant struct{
	ID         uint    `json:"id" gorm:"primaryKey;autoIncrement"`
	ExpenseID  uint    `json:"expense_id" gorm:"not null"`
	UserID     uint    `json:"user_id" gorm:"not null"`
	Share      float64 `json:"share" gorm:"not null"`
	Settled    bool    `json:"settled" gorm:"default:false"`
}