import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import SubHeader from '../SubHeader';

const Blog = () => {
    return (
        <div>
            <SubHeader>Faq Accordion</SubHeader>
            <Accordion className='md:mx-72 md:mt-20 md:text-2xl '>
                <AccordionItem className='mb-5'>
                    <AccordionItemHeading >
                        <AccordionItemButton>
                           When Should Use Context Api?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='text-xl capitalize'>
                            When we need shared a data to many components Then we use context api. For that we need create a context with and provide it parent of all components. after create and provide data any components access the provided data by useContext()hook. it helps shared data without props drillings.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='mb-5'>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What Is a Custom hook?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='text-xl capitalize'>
                        A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.  when we want to share logic between other JavaScript functions. we can use our own custom hook.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='mb-5'>
                    <AccordionItemHeading >
                        <AccordionItemButton>
                            What Is useRef()?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='text-xl capitalize'>
                        useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference as a object. that reference object has a special property its call current.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className='mb-5'>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is useMemo()?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='text-xl capitalize'>
                        useMemo Hook returns a memoized value. and it helps calculation between re-renders.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;