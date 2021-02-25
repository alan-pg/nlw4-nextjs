import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://cdn.shopify.com/s/files/1/0140/1526/6902/products/Cute_Baby_Groot_Flower_Pots13_600x.png?v=1560069134" alt=""/>
            <div>
                <strong>Alan Gonçalves</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}