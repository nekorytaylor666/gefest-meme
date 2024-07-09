import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { H1 } from "./components/ui/typography";

function App() {
	const [url, setUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		alert(url);
		setIsLoading(true);
	};

	return (
		<>
			<div className="container max-w-lg h-screen flex flex-col justify-center items-center">
				<H1>Vite + React</H1>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-2 items-start mt-8">
						<Label>Ссылка на статью</Label>
						<Input value={url} onChange={(e) => setUrl(e.target.value)} />
						<p className="text-muted-foreground text-left">
							Ссылка на статью должна быть в формате
							https://example.com/article-slug
						</p>
						<div className="flex w-full justify-end">
							<Button type="submit">Перевести статью</Button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
