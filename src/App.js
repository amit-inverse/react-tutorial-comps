import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            id: 'wrjjwe',
            label: 'Can I use React on a project?',
            content: 'You can use React. You can use React. You can use React.',
        },
        {
            id: 'eterg',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use React. You can use React. You can use React. You can use React. You can use React. You can use React.',
        },
        {
            id: 'rtr43',
            label: 'Can I use CSS on a project?',
            content: 'You can use React. You can use React. You can use React.',
        },
    ];

    return <Accordion items={items} />;
}

export default App;
