import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from './ui';

interface Props {
    className?: string;
    name: string;

}

export const FilterChekbox: React.FC<Props> = (props) => {
    const { className, name } = props;
    return (
        <label className={cn("flex gap-2 items-center", className)}>

            <Checkbox />

            {name}

        </label>
    );
}