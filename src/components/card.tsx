import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Title } from './title';
import { Button } from './ui';
import { Plus } from 'lucide-react';

interface Props {
    className?: string;
    title: string;
    imgUrl: string;
    text: any[];
    price: number;
}

export const Card: React.FC<Props> = (props) => {
    const { className, title, imgUrl, price, text } = props;
    return (
        <article className={cn("", className)}>


            <div><Image src={imgUrl} alt={''} width={210} height={210} /></div>
            <Title size={'m'}>
                {title}
            </Title>
            <p> {text.map((el) => el.name).join(",")}</p>
            <div>
                <span>от {price} ₽</span>
                <Button>
                    <Plus /> Добавить
                </Button>
            </div>

        </article>
    );
}