function App() {
    try {
        React.useEffect(() => {
            lucide.createIcons();
        }, []);

        return (
            <div data-name="app" data-file="app.js">
                <Header />
                <Hero />
                <PainPoints />
                <HowItWorks />
                <Features />
                <Pricing />
                <Trust />
                <FAQ />
                <WaitlistCTA />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
