import { body } from "express-validator";

export const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 5}), 
];


export const registerValidation = [
    body('email').isEmail(),
    body('password').isLength({min: 5}), 
    body('fullName').isLength({min: 3}), 
    body('avatarUrl').optional().isURL(),
];


export const postCreateValidation = [
    body('title', 'Enter article title').isLength({min: 3}).isString(),
    body('text', 'Enter article text').isLength({min: 5}).isString(), 
    body('tags', 'Wrong format (specify array)').optional().isString(), 
    body('imageUrl', 'Wrong image path').optional().isString(),
]