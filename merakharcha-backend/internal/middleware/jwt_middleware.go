package middleware

import (
	"net/http"
	"os"
	"strings"

	"github.com/devlpr-nitish/merakharcha-backend/internal/utils"
	"github.com/golang-jwt/jwt/v5"
	"github.com/labstack/echo/v4"
)

var jwtSecret = []byte(os.Getenv("JWT_SECRET"))

func JWTAuthMiddleware(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		authHeader := c.Request().Header.Get("Authorization")

		if authHeader == "" {
			return utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "missing Authorization header"), "Unauthorized user")
		}

		parts := strings.Split(authHeader, " ")

		if len(parts) != 2 || strings.ToLower(parts[0]) != "bearer" {
			return utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "invalide Authorization header"), "Unauthorized user")
		}
		tokenString := parts[1]

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "invalide Authorization header"), "Unauthorized user")
			}
			return jwtSecret, nil
		})

		if err != nil {
			return utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "invalide Authorization header"), "Unauthorized user")
		}

		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			userIDFloat, ok := claims["user_id"].(float64)
			if !ok {
				return utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "invalide Authorization header"), "Unauthorized user")
			}
			c.Set("user_id", uint(userIDFloat))
			return next(c)
		}

		return utils.RespondError(c, http.StatusUnauthorized, echo.NewHTTPError(http.StatusUnauthorized, "invalide Authorization header"), "Unauthorized user")
	}
}
