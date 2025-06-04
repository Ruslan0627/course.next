"use client"
import { JSX, useEffect, useState } from "react";
import { IRating } from "./rating.type";
import styles from "./rating.module.css"
import StarIcon from "./star.svg"
import cn from "classnames"
export function Rating({rating, isEditable, setRating, ...props}:IRating) {
	const [arrayStar,setArrayStar] = useState<JSX.Element[]>(new Array(5).fill(<></>))
	useEffect(() => {
		renderStars(rating)
},[rating])

	const renderStars = (currentRating: number) => {
		const updateStars = arrayStar.map( (star:JSX.Element, idx:number) => {
			return (
				<StarIcon className= {cn(styles.star, {
					[styles.filled]: idx < currentRating,
					[styles.editedStar]:isEditable
				})} 
				key={idx} 
				onMouseEnter={() => onHoverStar(idx + 1)}
				onMouseLeave={() => onHoverStar(rating)}
				onClick={() => onSetRarting(idx + 1) }
				 />
			)
		})
		setArrayStar(updateStars)
	}

	const onHoverStar = ( index:number ) => {
		if (!isEditable) return
		renderStars(index)
	}

		const onSetRarting = ( rating:number ) => {
		if (setRating && rating) setRating(rating)
			return
	}
		return (
				<div {...props}>
					{arrayStar.map((star:JSX.Element) => star)}
				</div>
		);
} 
