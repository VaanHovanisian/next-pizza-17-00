import React from 'react';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import { Input } from './ui/input';

interface Props {
    className?: string;
}

export const Search: React.FC<Props> = (props) => {
    const { className } = props;
    return (
        <label className={cn("relative flex items-center gap-2", className)}>
            <SearchIcon className='absolute left-1 text-gray-400' />
            <Input placeholder='Поиск пиццы...' className='pl-8 py-1 bg-[#f9f9f9]' />
        </label>
    );
}