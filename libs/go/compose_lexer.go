// Code generated from ComposeLexer.g4 by ANTLR 4.9.3. DO NOT EDIT.

package parser

import (
	"fmt"
	"unicode"

	"github.com/antlr/antlr4/runtime/Go/antlr"
)

// Suppress unused import error
var _ = fmt.Printf
var _ = unicode.IsLetter

var serializedLexerAtn = []uint16{
	3, 24715, 42794, 33075, 47597, 16764, 15335, 30598, 22884, 2, 24, 500,
	8, 1, 4, 2, 9, 2, 4, 3, 9, 3, 4, 4, 9, 4, 4, 5, 9, 5, 4, 6, 9, 6, 4, 7,
	9, 7, 4, 8, 9, 8, 4, 9, 9, 9, 4, 10, 9, 10, 4, 11, 9, 11, 4, 12, 9, 12,
	4, 13, 9, 13, 4, 14, 9, 14, 4, 15, 9, 15, 4, 16, 9, 16, 4, 17, 9, 17, 4,
	18, 9, 18, 4, 19, 9, 19, 4, 20, 9, 20, 4, 21, 9, 21, 4, 22, 9, 22, 4, 23,
	9, 23, 4, 24, 9, 24, 4, 25, 9, 25, 4, 26, 9, 26, 4, 27, 9, 27, 4, 28, 9,
	28, 4, 29, 9, 29, 4, 30, 9, 30, 4, 31, 9, 31, 4, 32, 9, 32, 4, 33, 9, 33,
	4, 34, 9, 34, 4, 35, 9, 35, 4, 36, 9, 36, 4, 37, 9, 37, 4, 38, 9, 38, 4,
	39, 9, 39, 4, 40, 9, 40, 4, 41, 9, 41, 4, 42, 9, 42, 4, 43, 9, 43, 4, 44,
	9, 44, 4, 45, 9, 45, 4, 46, 9, 46, 4, 47, 9, 47, 4, 48, 9, 48, 4, 49, 9,
	49, 4, 50, 9, 50, 4, 51, 9, 51, 4, 52, 9, 52, 4, 53, 9, 53, 4, 54, 9, 54,
	4, 55, 9, 55, 4, 56, 9, 56, 4, 57, 9, 57, 4, 58, 9, 58, 4, 59, 9, 59, 4,
	60, 9, 60, 4, 61, 9, 61, 4, 62, 9, 62, 4, 63, 9, 63, 4, 64, 9, 64, 4, 65,
	9, 65, 4, 66, 9, 66, 4, 67, 9, 67, 4, 68, 9, 68, 4, 69, 9, 69, 3, 2, 3,
	2, 3, 3, 3, 3, 3, 4, 3, 4, 3, 5, 3, 5, 3, 6, 3, 6, 3, 7, 3, 7, 3, 8, 3,
	8, 3, 9, 3, 9, 3, 10, 3, 10, 3, 11, 3, 11, 3, 11, 3, 11, 3, 11, 3, 12,
	3, 12, 3, 12, 3, 12, 3, 12, 3, 13, 3, 13, 3, 13, 3, 13, 3, 13, 3, 13, 3,
	14, 3, 14, 7, 14, 176, 10, 14, 12, 14, 14, 14, 179, 11, 14, 3, 15, 3, 15,
	3, 15, 3, 15, 5, 15, 185, 10, 15, 3, 16, 3, 16, 5, 16, 189, 10, 16, 3,
	17, 3, 17, 5, 17, 193, 10, 17, 3, 18, 3, 18, 5, 18, 197, 10, 18, 3, 19,
	3, 19, 5, 19, 201, 10, 19, 3, 20, 3, 20, 3, 21, 3, 21, 3, 21, 5, 21, 208,
	10, 21, 3, 21, 3, 21, 3, 21, 5, 21, 213, 10, 21, 5, 21, 215, 10, 21, 3,
	22, 3, 22, 5, 22, 219, 10, 22, 3, 22, 5, 22, 222, 10, 22, 3, 23, 3, 23,
	5, 23, 226, 10, 23, 3, 24, 3, 24, 3, 25, 6, 25, 231, 10, 25, 13, 25, 14,
	25, 232, 3, 26, 3, 26, 5, 26, 237, 10, 26, 3, 27, 6, 27, 240, 10, 27, 13,
	27, 14, 27, 241, 3, 28, 3, 28, 3, 28, 3, 28, 3, 29, 3, 29, 5, 29, 250,
	10, 29, 3, 29, 5, 29, 253, 10, 29, 3, 30, 3, 30, 3, 31, 6, 31, 258, 10,
	31, 13, 31, 14, 31, 259, 3, 32, 3, 32, 5, 32, 264, 10, 32, 3, 33, 3, 33,
	5, 33, 268, 10, 33, 3, 33, 3, 33, 3, 34, 3, 34, 5, 34, 274, 10, 34, 3,
	34, 5, 34, 277, 10, 34, 3, 35, 3, 35, 3, 36, 6, 36, 282, 10, 36, 13, 36,
	14, 36, 283, 3, 37, 3, 37, 5, 37, 288, 10, 37, 3, 38, 3, 38, 3, 38, 3,
	38, 3, 39, 3, 39, 5, 39, 296, 10, 39, 3, 39, 5, 39, 299, 10, 39, 3, 40,
	3, 40, 3, 41, 6, 41, 304, 10, 41, 13, 41, 14, 41, 305, 3, 42, 3, 42, 5,
	42, 310, 10, 42, 3, 43, 3, 43, 5, 43, 314, 10, 43, 3, 44, 3, 44, 3, 44,
	5, 44, 319, 10, 44, 3, 44, 5, 44, 322, 10, 44, 3, 44, 5, 44, 325, 10, 44,
	3, 44, 3, 44, 3, 44, 5, 44, 330, 10, 44, 3, 44, 5, 44, 333, 10, 44, 3,
	44, 3, 44, 3, 44, 5, 44, 338, 10, 44, 3, 44, 3, 44, 3, 44, 5, 44, 343,
	10, 44, 3, 45, 3, 45, 3, 45, 3, 46, 3, 46, 3, 47, 5, 47, 351, 10, 47, 3,
	47, 3, 47, 3, 48, 3, 48, 3, 49, 3, 49, 3, 50, 3, 50, 3, 50, 5, 50, 362,
	10, 50, 3, 51, 3, 51, 5, 51, 366, 10, 51, 3, 51, 3, 51, 3, 51, 5, 51, 371,
	10, 51, 3, 51, 3, 51, 5, 51, 375, 10, 51, 3, 52, 3, 52, 3, 52, 3, 53, 3,
	53, 3, 54, 3, 54, 3, 54, 3, 54, 3, 54, 3, 54, 3, 54, 3, 54, 3, 54, 5, 54,
	391, 10, 54, 3, 55, 3, 55, 3, 55, 3, 55, 3, 55, 3, 55, 3, 55, 3, 55, 5,
	55, 401, 10, 55, 3, 56, 3, 56, 3, 57, 3, 57, 5, 57, 407, 10, 57, 3, 57,
	3, 57, 3, 58, 6, 58, 412, 10, 58, 13, 58, 14, 58, 413, 3, 59, 3, 59, 5,
	59, 418, 10, 59, 3, 60, 3, 60, 3, 60, 3, 60, 5, 60, 424, 10, 60, 3, 61,
	3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 3, 61, 5,
	61, 437, 10, 61, 3, 62, 3, 62, 3, 63, 3, 63, 6, 63, 443, 10, 63, 13, 63,
	14, 63, 444, 3, 63, 3, 63, 3, 63, 3, 63, 3, 63, 3, 64, 3, 64, 3, 64, 3,
	64, 3, 64, 3, 65, 3, 65, 3, 65, 3, 65, 5, 65, 461, 10, 65, 3, 66, 3, 66,
	3, 66, 3, 66, 5, 66, 467, 10, 66, 3, 67, 6, 67, 470, 10, 67, 13, 67, 14,
	67, 471, 3, 67, 3, 67, 3, 68, 3, 68, 3, 68, 3, 68, 7, 68, 480, 10, 68,
	12, 68, 14, 68, 483, 11, 68, 3, 68, 3, 68, 3, 68, 3, 68, 3, 68, 3, 69,
	3, 69, 3, 69, 3, 69, 7, 69, 494, 10, 69, 12, 69, 14, 69, 497, 11, 69, 3,
	69, 3, 69, 3, 481, 2, 70, 3, 3, 5, 4, 7, 5, 9, 6, 11, 7, 13, 8, 15, 9,
	17, 10, 19, 11, 21, 12, 23, 13, 25, 14, 27, 15, 29, 16, 31, 2, 33, 2, 35,
	2, 37, 2, 39, 2, 41, 2, 43, 2, 45, 2, 47, 2, 49, 2, 51, 2, 53, 2, 55, 2,
	57, 2, 59, 2, 61, 2, 63, 2, 65, 2, 67, 2, 69, 2, 71, 2, 73, 2, 75, 2, 77,
	2, 79, 2, 81, 2, 83, 2, 85, 17, 87, 2, 89, 2, 91, 2, 93, 2, 95, 2, 97,
	2, 99, 2, 101, 2, 103, 2, 105, 2, 107, 18, 109, 19, 111, 2, 113, 20, 115,
	2, 117, 2, 119, 2, 121, 2, 123, 2, 125, 2, 127, 21, 129, 2, 131, 2, 133,
	22, 135, 23, 137, 24, 3, 2, 24, 4, 2, 78, 78, 110, 110, 3, 2, 51, 59, 4,
	2, 90, 90, 122, 122, 5, 2, 50, 59, 67, 72, 99, 104, 3, 2, 50, 57, 4, 2,
	68, 68, 100, 100, 3, 2, 50, 51, 4, 2, 71, 71, 103, 103, 4, 2, 45, 45, 47,
	47, 6, 2, 70, 70, 72, 72, 102, 102, 104, 104, 4, 2, 82, 82, 114, 114, 6,
	2, 12, 12, 15, 15, 41, 41, 94, 94, 6, 2, 12, 12, 15, 15, 36, 36, 94, 94,
	10, 2, 36, 36, 41, 41, 94, 94, 100, 100, 104, 104, 112, 112, 116, 116,
	118, 118, 3, 2, 50, 53, 6, 2, 38, 38, 67, 92, 97, 97, 99, 124, 4, 2, 2,
	129, 55298, 56321, 3, 2, 55298, 56321, 3, 2, 56322, 57345, 7, 2, 38, 38,
	50, 59, 67, 92, 97, 97, 99, 124, 5, 2, 11, 12, 14, 15, 34, 34, 4, 2, 12,
	12, 15, 15, 2, 515, 2, 3, 3, 2, 2, 2, 2, 5, 3, 2, 2, 2, 2, 7, 3, 2, 2,
	2, 2, 9, 3, 2, 2, 2, 2, 11, 3, 2, 2, 2, 2, 13, 3, 2, 2, 2, 2, 15, 3, 2,
	2, 2, 2, 17, 3, 2, 2, 2, 2, 19, 3, 2, 2, 2, 2, 21, 3, 2, 2, 2, 2, 23, 3,
	2, 2, 2, 2, 25, 3, 2, 2, 2, 2, 27, 3, 2, 2, 2, 2, 29, 3, 2, 2, 2, 2, 85,
	3, 2, 2, 2, 2, 107, 3, 2, 2, 2, 2, 109, 3, 2, 2, 2, 2, 113, 3, 2, 2, 2,
	2, 127, 3, 2, 2, 2, 2, 133, 3, 2, 2, 2, 2, 135, 3, 2, 2, 2, 2, 137, 3,
	2, 2, 2, 3, 139, 3, 2, 2, 2, 5, 141, 3, 2, 2, 2, 7, 143, 3, 2, 2, 2, 9,
	145, 3, 2, 2, 2, 11, 147, 3, 2, 2, 2, 13, 149, 3, 2, 2, 2, 15, 151, 3,
	2, 2, 2, 17, 153, 3, 2, 2, 2, 19, 155, 3, 2, 2, 2, 21, 157, 3, 2, 2, 2,
	23, 162, 3, 2, 2, 2, 25, 167, 3, 2, 2, 2, 27, 173, 3, 2, 2, 2, 29, 184,
	3, 2, 2, 2, 31, 186, 3, 2, 2, 2, 33, 190, 3, 2, 2, 2, 35, 194, 3, 2, 2,
	2, 37, 198, 3, 2, 2, 2, 39, 202, 3, 2, 2, 2, 41, 214, 3, 2, 2, 2, 43, 216,
	3, 2, 2, 2, 45, 225, 3, 2, 2, 2, 47, 227, 3, 2, 2, 2, 49, 230, 3, 2, 2,
	2, 51, 236, 3, 2, 2, 2, 53, 239, 3, 2, 2, 2, 55, 243, 3, 2, 2, 2, 57, 247,
	3, 2, 2, 2, 59, 254, 3, 2, 2, 2, 61, 257, 3, 2, 2, 2, 63, 263, 3, 2, 2,
	2, 65, 265, 3, 2, 2, 2, 67, 271, 3, 2, 2, 2, 69, 278, 3, 2, 2, 2, 71, 281,
	3, 2, 2, 2, 73, 287, 3, 2, 2, 2, 75, 289, 3, 2, 2, 2, 77, 293, 3, 2, 2,
	2, 79, 300, 3, 2, 2, 2, 81, 303, 3, 2, 2, 2, 83, 309, 3, 2, 2, 2, 85, 313,
	3, 2, 2, 2, 87, 342, 3, 2, 2, 2, 89, 344, 3, 2, 2, 2, 91, 347, 3, 2, 2,
	2, 93, 350, 3, 2, 2, 2, 95, 354, 3, 2, 2, 2, 97, 356, 3, 2, 2, 2, 99, 358,
	3, 2, 2, 2, 101, 374, 3, 2, 2, 2, 103, 376, 3, 2, 2, 2, 105, 379, 3, 2,
	2, 2, 107, 390, 3, 2, 2, 2, 109, 400, 3, 2, 2, 2, 111, 402, 3, 2, 2, 2,
	113, 404, 3, 2, 2, 2, 115, 411, 3, 2, 2, 2, 117, 417, 3, 2, 2, 2, 119,
	423, 3, 2, 2, 2, 121, 436, 3, 2, 2, 2, 123, 438, 3, 2, 2, 2, 125, 440,
	3, 2, 2, 2, 127, 451, 3, 2, 2, 2, 129, 460, 3, 2, 2, 2, 131, 466, 3, 2,
	2, 2, 133, 469, 3, 2, 2, 2, 135, 475, 3, 2, 2, 2, 137, 489, 3, 2, 2, 2,
	139, 140, 7, 42, 2, 2, 140, 4, 3, 2, 2, 2, 141, 142, 7, 43, 2, 2, 142,
	6, 3, 2, 2, 2, 143, 144, 7, 125, 2, 2, 144, 8, 3, 2, 2, 2, 145, 146, 7,
	127, 2, 2, 146, 10, 3, 2, 2, 2, 147, 148, 7, 93, 2, 2, 148, 12, 3, 2, 2,
	2, 149, 150, 7, 95, 2, 2, 150, 14, 3, 2, 2, 2, 151, 152, 7, 61, 2, 2, 152,
	16, 3, 2, 2, 2, 153, 154, 7, 46, 2, 2, 154, 18, 3, 2, 2, 2, 155, 156, 7,
	48, 2, 2, 156, 20, 3, 2, 2, 2, 157, 158, 7, 68, 2, 2, 158, 159, 7, 113,
	2, 2, 159, 160, 7, 113, 2, 2, 160, 161, 7, 109, 2, 2, 161, 22, 3, 2, 2,
	2, 162, 163, 7, 80, 2, 2, 163, 164, 7, 113, 2, 2, 164, 165, 7, 118, 2,
	2, 165, 166, 7, 103, 2, 2, 166, 24, 3, 2, 2, 2, 167, 168, 7, 82, 2, 2,
	168, 169, 7, 99, 2, 2, 169, 170, 7, 114, 2, 2, 170, 171, 7, 103, 2, 2,
	171, 172, 7, 116, 2, 2, 172, 26, 3, 2, 2, 2, 173, 177, 5, 129, 65, 2, 174,
	176, 5, 131, 66, 2, 175, 174, 3, 2, 2, 2, 176, 179, 3, 2, 2, 2, 177, 175,
	3, 2, 2, 2, 177, 178, 3, 2, 2, 2, 178, 28, 3, 2, 2, 2, 179, 177, 3, 2,
	2, 2, 180, 185, 5, 31, 16, 2, 181, 185, 5, 33, 17, 2, 182, 185, 5, 35,
	18, 2, 183, 185, 5, 37, 19, 2, 184, 180, 3, 2, 2, 2, 184, 181, 3, 2, 2,
	2, 184, 182, 3, 2, 2, 2, 184, 183, 3, 2, 2, 2, 185, 30, 3, 2, 2, 2, 186,
	188, 5, 41, 21, 2, 187, 189, 5, 39, 20, 2, 188, 187, 3, 2, 2, 2, 188, 189,
	3, 2, 2, 2, 189, 32, 3, 2, 2, 2, 190, 192, 5, 55, 28, 2, 191, 193, 5, 39,
	20, 2, 192, 191, 3, 2, 2, 2, 192, 193, 3, 2, 2, 2, 193, 34, 3, 2, 2, 2,
	194, 196, 5, 65, 33, 2, 195, 197, 5, 39, 20, 2, 196, 195, 3, 2, 2, 2, 196,
	197, 3, 2, 2, 2, 197, 36, 3, 2, 2, 2, 198, 200, 5, 75, 38, 2, 199, 201,
	5, 39, 20, 2, 200, 199, 3, 2, 2, 2, 200, 201, 3, 2, 2, 2, 201, 38, 3, 2,
	2, 2, 202, 203, 9, 2, 2, 2, 203, 40, 3, 2, 2, 2, 204, 215, 7, 50, 2, 2,
	205, 212, 5, 47, 24, 2, 206, 208, 5, 43, 22, 2, 207, 206, 3, 2, 2, 2, 207,
	208, 3, 2, 2, 2, 208, 213, 3, 2, 2, 2, 209, 210, 5, 53, 27, 2, 210, 211,
	5, 43, 22, 2, 211, 213, 3, 2, 2, 2, 212, 207, 3, 2, 2, 2, 212, 209, 3,
	2, 2, 2, 213, 215, 3, 2, 2, 2, 214, 204, 3, 2, 2, 2, 214, 205, 3, 2, 2,
	2, 215, 42, 3, 2, 2, 2, 216, 221, 5, 45, 23, 2, 217, 219, 5, 49, 25, 2,
	218, 217, 3, 2, 2, 2, 218, 219, 3, 2, 2, 2, 219, 220, 3, 2, 2, 2, 220,
	222, 5, 45, 23, 2, 221, 218, 3, 2, 2, 2, 221, 222, 3, 2, 2, 2, 222, 44,
	3, 2, 2, 2, 223, 226, 7, 50, 2, 2, 224, 226, 5, 47, 24, 2, 225, 223, 3,
	2, 2, 2, 225, 224, 3, 2, 2, 2, 226, 46, 3, 2, 2, 2, 227, 228, 9, 3, 2,
	2, 228, 48, 3, 2, 2, 2, 229, 231, 5, 51, 26, 2, 230, 229, 3, 2, 2, 2, 231,
	232, 3, 2, 2, 2, 232, 230, 3, 2, 2, 2, 232, 233, 3, 2, 2, 2, 233, 50, 3,
	2, 2, 2, 234, 237, 5, 45, 23, 2, 235, 237, 7, 97, 2, 2, 236, 234, 3, 2,
	2, 2, 236, 235, 3, 2, 2, 2, 237, 52, 3, 2, 2, 2, 238, 240, 7, 97, 2, 2,
	239, 238, 3, 2, 2, 2, 240, 241, 3, 2, 2, 2, 241, 239, 3, 2, 2, 2, 241,
	242, 3, 2, 2, 2, 242, 54, 3, 2, 2, 2, 243, 244, 7, 50, 2, 2, 244, 245,
	9, 4, 2, 2, 245, 246, 5, 57, 29, 2, 246, 56, 3, 2, 2, 2, 247, 252, 5, 59,
	30, 2, 248, 250, 5, 61, 31, 2, 249, 248, 3, 2, 2, 2, 249, 250, 3, 2, 2,
	2, 250, 251, 3, 2, 2, 2, 251, 253, 5, 59, 30, 2, 252, 249, 3, 2, 2, 2,
	252, 253, 3, 2, 2, 2, 253, 58, 3, 2, 2, 2, 254, 255, 9, 5, 2, 2, 255, 60,
	3, 2, 2, 2, 256, 258, 5, 63, 32, 2, 257, 256, 3, 2, 2, 2, 258, 259, 3,
	2, 2, 2, 259, 257, 3, 2, 2, 2, 259, 260, 3, 2, 2, 2, 260, 62, 3, 2, 2,
	2, 261, 264, 5, 59, 30, 2, 262, 264, 7, 97, 2, 2, 263, 261, 3, 2, 2, 2,
	263, 262, 3, 2, 2, 2, 264, 64, 3, 2, 2, 2, 265, 267, 7, 50, 2, 2, 266,
	268, 5, 53, 27, 2, 267, 266, 3, 2, 2, 2, 267, 268, 3, 2, 2, 2, 268, 269,
	3, 2, 2, 2, 269, 270, 5, 67, 34, 2, 270, 66, 3, 2, 2, 2, 271, 276, 5, 69,
	35, 2, 272, 274, 5, 71, 36, 2, 273, 272, 3, 2, 2, 2, 273, 274, 3, 2, 2,
	2, 274, 275, 3, 2, 2, 2, 275, 277, 5, 69, 35, 2, 276, 273, 3, 2, 2, 2,
	276, 277, 3, 2, 2, 2, 277, 68, 3, 2, 2, 2, 278, 279, 9, 6, 2, 2, 279, 70,
	3, 2, 2, 2, 280, 282, 5, 73, 37, 2, 281, 280, 3, 2, 2, 2, 282, 283, 3,
	2, 2, 2, 283, 281, 3, 2, 2, 2, 283, 284, 3, 2, 2, 2, 284, 72, 3, 2, 2,
	2, 285, 288, 5, 69, 35, 2, 286, 288, 7, 97, 2, 2, 287, 285, 3, 2, 2, 2,
	287, 286, 3, 2, 2, 2, 288, 74, 3, 2, 2, 2, 289, 290, 7, 50, 2, 2, 290,
	291, 9, 7, 2, 2, 291, 292, 5, 77, 39, 2, 292, 76, 3, 2, 2, 2, 293, 298,
	5, 79, 40, 2, 294, 296, 5, 81, 41, 2, 295, 294, 3, 2, 2, 2, 295, 296, 3,
	2, 2, 2, 296, 297, 3, 2, 2, 2, 297, 299, 5, 79, 40, 2, 298, 295, 3, 2,
	2, 2, 298, 299, 3, 2, 2, 2, 299, 78, 3, 2, 2, 2, 300, 301, 9, 8, 2, 2,
	301, 80, 3, 2, 2, 2, 302, 304, 5, 83, 42, 2, 303, 302, 3, 2, 2, 2, 304,
	305, 3, 2, 2, 2, 305, 303, 3, 2, 2, 2, 305, 306, 3, 2, 2, 2, 306, 82, 3,
	2, 2, 2, 307, 310, 5, 79, 40, 2, 308, 310, 7, 97, 2, 2, 309, 307, 3, 2,
	2, 2, 309, 308, 3, 2, 2, 2, 310, 84, 3, 2, 2, 2, 311, 314, 5, 87, 44, 2,
	312, 314, 5, 99, 50, 2, 313, 311, 3, 2, 2, 2, 313, 312, 3, 2, 2, 2, 314,
	86, 3, 2, 2, 2, 315, 316, 5, 43, 22, 2, 316, 318, 7, 48, 2, 2, 317, 319,
	5, 43, 22, 2, 318, 317, 3, 2, 2, 2, 318, 319, 3, 2, 2, 2, 319, 321, 3,
	2, 2, 2, 320, 322, 5, 89, 45, 2, 321, 320, 3, 2, 2, 2, 321, 322, 3, 2,
	2, 2, 322, 324, 3, 2, 2, 2, 323, 325, 5, 97, 49, 2, 324, 323, 3, 2, 2,
	2, 324, 325, 3, 2, 2, 2, 325, 343, 3, 2, 2, 2, 326, 327, 7, 48, 2, 2, 327,
	329, 5, 43, 22, 2, 328, 330, 5, 89, 45, 2, 329, 328, 3, 2, 2, 2, 329, 330,
	3, 2, 2, 2, 330, 332, 3, 2, 2, 2, 331, 333, 5, 97, 49, 2, 332, 331, 3,
	2, 2, 2, 332, 333, 3, 2, 2, 2, 333, 343, 3, 2, 2, 2, 334, 335, 5, 43, 22,
	2, 335, 337, 5, 89, 45, 2, 336, 338, 5, 97, 49, 2, 337, 336, 3, 2, 2, 2,
	337, 338, 3, 2, 2, 2, 338, 343, 3, 2, 2, 2, 339, 340, 5, 43, 22, 2, 340,
	341, 5, 97, 49, 2, 341, 343, 3, 2, 2, 2, 342, 315, 3, 2, 2, 2, 342, 326,
	3, 2, 2, 2, 342, 334, 3, 2, 2, 2, 342, 339, 3, 2, 2, 2, 343, 88, 3, 2,
	2, 2, 344, 345, 5, 91, 46, 2, 345, 346, 5, 93, 47, 2, 346, 90, 3, 2, 2,
	2, 347, 348, 9, 9, 2, 2, 348, 92, 3, 2, 2, 2, 349, 351, 5, 95, 48, 2, 350,
	349, 3, 2, 2, 2, 350, 351, 3, 2, 2, 2, 351, 352, 3, 2, 2, 2, 352, 353,
	5, 43, 22, 2, 353, 94, 3, 2, 2, 2, 354, 355, 9, 10, 2, 2, 355, 96, 3, 2,
	2, 2, 356, 357, 9, 11, 2, 2, 357, 98, 3, 2, 2, 2, 358, 359, 5, 101, 51,
	2, 359, 361, 5, 103, 52, 2, 360, 362, 5, 97, 49, 2, 361, 360, 3, 2, 2,
	2, 361, 362, 3, 2, 2, 2, 362, 100, 3, 2, 2, 2, 363, 365, 5, 55, 28, 2,
	364, 366, 7, 48, 2, 2, 365, 364, 3, 2, 2, 2, 365, 366, 3, 2, 2, 2, 366,
	375, 3, 2, 2, 2, 367, 368, 7, 50, 2, 2, 368, 370, 9, 4, 2, 2, 369, 371,
	5, 57, 29, 2, 370, 369, 3, 2, 2, 2, 370, 371, 3, 2, 2, 2, 371, 372, 3,
	2, 2, 2, 372, 373, 7, 48, 2, 2, 373, 375, 5, 57, 29, 2, 374, 363, 3, 2,
	2, 2, 374, 367, 3, 2, 2, 2, 375, 102, 3, 2, 2, 2, 376, 377, 5, 105, 53,
	2, 377, 378, 5, 93, 47, 2, 378, 104, 3, 2, 2, 2, 379, 380, 9, 12, 2, 2,
	380, 106, 3, 2, 2, 2, 381, 382, 7, 118, 2, 2, 382, 383, 7, 116, 2, 2, 383,
	384, 7, 119, 2, 2, 384, 391, 7, 103, 2, 2, 385, 386, 7, 104, 2, 2, 386,
	387, 7, 99, 2, 2, 387, 388, 7, 110, 2, 2, 388, 389, 7, 117, 2, 2, 389,
	391, 7, 103, 2, 2, 390, 381, 3, 2, 2, 2, 390, 385, 3, 2, 2, 2, 391, 108,
	3, 2, 2, 2, 392, 393, 7, 41, 2, 2, 393, 394, 5, 111, 56, 2, 394, 395, 7,
	41, 2, 2, 395, 401, 3, 2, 2, 2, 396, 397, 7, 41, 2, 2, 397, 398, 5, 119,
	60, 2, 398, 399, 7, 41, 2, 2, 399, 401, 3, 2, 2, 2, 400, 392, 3, 2, 2,
	2, 400, 396, 3, 2, 2, 2, 401, 110, 3, 2, 2, 2, 402, 403, 10, 13, 2, 2,
	403, 112, 3, 2, 2, 2, 404, 406, 7, 36, 2, 2, 405, 407, 5, 115, 58, 2, 406,
	405, 3, 2, 2, 2, 406, 407, 3, 2, 2, 2, 407, 408, 3, 2, 2, 2, 408, 409,
	7, 36, 2, 2, 409, 114, 3, 2, 2, 2, 410, 412, 5, 117, 59, 2, 411, 410, 3,
	2, 2, 2, 412, 413, 3, 2, 2, 2, 413, 411, 3, 2, 2, 2, 413, 414, 3, 2, 2,
	2, 414, 116, 3, 2, 2, 2, 415, 418, 10, 14, 2, 2, 416, 418, 5, 119, 60,
	2, 417, 415, 3, 2, 2, 2, 417, 416, 3, 2, 2, 2, 418, 118, 3, 2, 2, 2, 419,
	420, 7, 94, 2, 2, 420, 424, 9, 15, 2, 2, 421, 424, 5, 121, 61, 2, 422,
	424, 5, 125, 63, 2, 423, 419, 3, 2, 2, 2, 423, 421, 3, 2, 2, 2, 423, 422,
	3, 2, 2, 2, 424, 120, 3, 2, 2, 2, 425, 426, 7, 94, 2, 2, 426, 437, 5, 69,
	35, 2, 427, 428, 7, 94, 2, 2, 428, 429, 5, 69, 35, 2, 429, 430, 5, 69,
	35, 2, 430, 437, 3, 2, 2, 2, 431, 432, 7, 94, 2, 2, 432, 433, 5, 123, 62,
	2, 433, 434, 5, 69, 35, 2, 434, 435, 5, 69, 35, 2, 435, 437, 3, 2, 2, 2,
	436, 425, 3, 2, 2, 2, 436, 427, 3, 2, 2, 2, 436, 431, 3, 2, 2, 2, 437,
	122, 3, 2, 2, 2, 438, 439, 9, 16, 2, 2, 439, 124, 3, 2, 2, 2, 440, 442,
	7, 94, 2, 2, 441, 443, 7, 119, 2, 2, 442, 441, 3, 2, 2, 2, 443, 444, 3,
	2, 2, 2, 444, 442, 3, 2, 2, 2, 444, 445, 3, 2, 2, 2, 445, 446, 3, 2, 2,
	2, 446, 447, 5, 59, 30, 2, 447, 448, 5, 59, 30, 2, 448, 449, 5, 59, 30,
	2, 449, 450, 5, 59, 30, 2, 450, 126, 3, 2, 2, 2, 451, 452, 7, 112, 2, 2,
	452, 453, 7, 119, 2, 2, 453, 454, 7, 110, 2, 2, 454, 455, 7, 110, 2, 2,
	455, 128, 3, 2, 2, 2, 456, 461, 9, 17, 2, 2, 457, 461, 10, 18, 2, 2, 458,
	459, 9, 19, 2, 2, 459, 461, 9, 20, 2, 2, 460, 456, 3, 2, 2, 2, 460, 457,
	3, 2, 2, 2, 460, 458, 3, 2, 2, 2, 461, 130, 3, 2, 2, 2, 462, 467, 9, 21,
	2, 2, 463, 467, 10, 18, 2, 2, 464, 465, 9, 19, 2, 2, 465, 467, 9, 20, 2,
	2, 466, 462, 3, 2, 2, 2, 466, 463, 3, 2, 2, 2, 466, 464, 3, 2, 2, 2, 467,
	132, 3, 2, 2, 2, 468, 470, 9, 22, 2, 2, 469, 468, 3, 2, 2, 2, 470, 471,
	3, 2, 2, 2, 471, 469, 3, 2, 2, 2, 471, 472, 3, 2, 2, 2, 472, 473, 3, 2,
	2, 2, 473, 474, 8, 67, 2, 2, 474, 134, 3, 2, 2, 2, 475, 476, 7, 49, 2,
	2, 476, 477, 7, 44, 2, 2, 477, 481, 3, 2, 2, 2, 478, 480, 11, 2, 2, 2,
	479, 478, 3, 2, 2, 2, 480, 483, 3, 2, 2, 2, 481, 482, 3, 2, 2, 2, 481,
	479, 3, 2, 2, 2, 482, 484, 3, 2, 2, 2, 483, 481, 3, 2, 2, 2, 484, 485,
	7, 44, 2, 2, 485, 486, 7, 49, 2, 2, 486, 487, 3, 2, 2, 2, 487, 488, 8,
	68, 3, 2, 488, 136, 3, 2, 2, 2, 489, 490, 7, 49, 2, 2, 490, 491, 7, 49,
	2, 2, 491, 495, 3, 2, 2, 2, 492, 494, 10, 23, 2, 2, 493, 492, 3, 2, 2,
	2, 494, 497, 3, 2, 2, 2, 495, 493, 3, 2, 2, 2, 495, 496, 3, 2, 2, 2, 496,
	498, 3, 2, 2, 2, 497, 495, 3, 2, 2, 2, 498, 499, 8, 69, 3, 2, 499, 138,
	3, 2, 2, 2, 57, 2, 177, 184, 188, 192, 196, 200, 207, 212, 214, 218, 221,
	225, 232, 236, 241, 249, 252, 259, 263, 267, 273, 276, 283, 287, 295, 298,
	305, 309, 313, 318, 321, 324, 329, 332, 337, 342, 350, 361, 365, 370, 374,
	390, 400, 406, 413, 417, 423, 436, 444, 460, 466, 471, 481, 495, 4, 8,
	2, 2, 2, 3, 2,
}

var lexerChannelNames = []string{
	"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
}

var lexerModeNames = []string{
	"DEFAULT_MODE",
}

var lexerLiteralNames = []string{
	"", "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'Book'",
	"'Note'", "'Paper'", "", "", "", "", "", "", "'null'",
}

var lexerSymbolicNames = []string{
	"", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI",
	"COMMA", "DOT", "Book", "Note", "Paser", "Identifier", "IntegerLiteral",
	"FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral",
	"NullLiteral", "WS", "COMMENT", "LINE_COMMENT",
}

var lexerRuleNames = []string{
	"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA",
	"DOT", "Book", "Note", "Paser", "Identifier", "IntegerLiteral", "DecimalIntegerLiteral",
	"HexIntegerLiteral", "OctalIntegerLiteral", "BinaryIntegerLiteral", "IntegerTypeSuffix",
	"DecimalNumeral", "Digits", "Digit", "NonZeroDigit", "DigitsAndUnderscores",
	"DigitOrUnderscore", "Underscores", "HexNumeral", "HexDigits", "HexDigit",
	"HexDigitsAndUnderscores", "HexDigitOrUnderscore", "OctalNumeral", "OctalDigits",
	"OctalDigit", "OctalDigitsAndUnderscores", "OctalDigitOrUnderscore", "BinaryNumeral",
	"BinaryDigits", "BinaryDigit", "BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore",
	"FloatingPointLiteral", "DecimalFloatingPointLiteral", "ExponentPart",
	"ExponentIndicator", "SignedInteger", "Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral",
	"HexSignificand", "BinaryExponent", "BinaryExponentIndicator", "BooleanLiteral",
	"CharacterLiteral", "SingleCharacter", "StringLiteral", "StringCharacters",
	"StringCharacter", "EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape",
	"NullLiteral", "JavaLetter", "JavaLetterOrDigit", "WS", "COMMENT", "LINE_COMMENT",
}

type ComposeLexer struct {
	*antlr.BaseLexer
	channelNames []string
	modeNames    []string
	// TODO: EOF string
}

// NewComposeLexer produces a new lexer instance for the optional input antlr.CharStream.
//
// The *ComposeLexer instance produced may be reused by calling the SetInputStream method.
// The initial lexer configuration is expensive to construct, and the object is not thread-safe;
// however, if used within a Golang sync.Pool, the construction cost amortizes well and the
// objects can be used in a thread-safe manner.
func NewComposeLexer(input antlr.CharStream) *ComposeLexer {
	l := new(ComposeLexer)
	lexerDeserializer := antlr.NewATNDeserializer(nil)
	lexerAtn := lexerDeserializer.DeserializeFromUInt16(serializedLexerAtn)
	lexerDecisionToDFA := make([]*antlr.DFA, len(lexerAtn.DecisionToState))
	for index, ds := range lexerAtn.DecisionToState {
		lexerDecisionToDFA[index] = antlr.NewDFA(ds, index)
	}
	l.BaseLexer = antlr.NewBaseLexer(input)
	l.Interpreter = antlr.NewLexerATNSimulator(l, lexerAtn, lexerDecisionToDFA, antlr.NewPredictionContextCache())

	l.channelNames = lexerChannelNames
	l.modeNames = lexerModeNames
	l.RuleNames = lexerRuleNames
	l.LiteralNames = lexerLiteralNames
	l.SymbolicNames = lexerSymbolicNames
	l.GrammarFileName = "ComposeLexer.g4"
	// TODO: l.EOF = antlr.TokenEOF

	return l
}

// ComposeLexer tokens.
const (
	ComposeLexerLPAREN               = 1
	ComposeLexerRPAREN               = 2
	ComposeLexerLBRACE               = 3
	ComposeLexerRBRACE               = 4
	ComposeLexerLBRACK               = 5
	ComposeLexerRBRACK               = 6
	ComposeLexerSEMI                 = 7
	ComposeLexerCOMMA                = 8
	ComposeLexerDOT                  = 9
	ComposeLexerBook                 = 10
	ComposeLexerNote                 = 11
	ComposeLexerPaser                = 12
	ComposeLexerIdentifier           = 13
	ComposeLexerIntegerLiteral       = 14
	ComposeLexerFloatingPointLiteral = 15
	ComposeLexerBooleanLiteral       = 16
	ComposeLexerCharacterLiteral     = 17
	ComposeLexerStringLiteral        = 18
	ComposeLexerNullLiteral          = 19
	ComposeLexerWS                   = 20
	ComposeLexerCOMMENT              = 21
	ComposeLexerLINE_COMMENT         = 22
)
