import Accordion from './components/Accordion';

function App() {
    const items = [
        {
            label: 'Can I use React on a project?',
            content: 'You can use React. You can use React. You can use React.',
        },
        {
            label: 'Can I use JavaScript on a project?',
            content: '',
        },
        {
            label: 'Can I use CSS on a project?',
            content: '',
        },
    ];

    return <Accordion items={items} />;
}

export default App;
