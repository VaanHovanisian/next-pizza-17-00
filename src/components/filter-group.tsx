import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChekbox } from './filter-chekbox';
import { Title } from './title';

interface Props {
    className?: string;
    items: any[];
    limit?: number;
    title: string;

}

export const FilterGroup: React.FC<Props> = (props) => {
    const { className, items, limit, title } = props;
    return (
        <div className={cn("", className)}>

            <Title size={'s'}>
                {title}
            </Title>
            <ul>
                {items.map((el) => (
                    <li key={el.value}>
                        <FilterChekbox name={el.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}