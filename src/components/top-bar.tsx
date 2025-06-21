import React from 'react';
import { cn } from '@/lib/utils';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';


interface Props {
    className?: string;
}
const items = [
    {
        name: "Пиццы",

    },
    {
        name: "Мясные",

    },
    {
        name: "Острые",

    },
    {
        name: "Сладкие",

    },
    {
        name: "Вегетарианские",

    },
    {
        name: "С курицей",

    }
].map((el, i) => ({ ...el, id: i + 1 }))




export const TopBar: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <Container className={cn(" sticky top-2 flex justify-between", className)}>

            <Categories items={items} />
            <SortPopup />
        </Container>
    );
}