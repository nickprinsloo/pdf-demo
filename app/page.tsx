"use client";

import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState, memo } from "react";
import Markdown from "react-markdown";
import { PDFViewer } from "@react-pdf/renderer";
import { H1, H2, H3, P, PDF } from "@/components/ui/pdf";
import { Button } from "@/components/ui/button";

const Render = memo(({ markdown }: { markdown: string }) => {
	return (
		<PDFViewer className="w-full h-full">
			<PDF>
				<Markdown
					components={{
						h1: ({ children }) => <H1>{children}</H1>,
						h2: ({ children }) => <H2>{children}</H2>,
						h3: ({ children }) => <H3>{children}</H3>,
						p: ({ children }) => <P>{children}</P>,
					}}
					allowedElements={["h1", "h2", "h3", "p"]}
				>
					{markdown}
				</Markdown>
			</PDF>
		</PDFViewer>
	);
});

Render.displayName = "Render";

export default function Home() {
	const [markdown, setMarkdown] = useState("");

	const [textToRender, setTextToRender] = useState<string | undefined>(
		undefined,
	);

	const [client, setClient] = useState(false);

	useEffect(() => {
		setClient(true);
	}, []);

	if (!client) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex h-screen">
			<div className="w-1/2 flex grow p-4 flex-col gap-2">
				<Textarea
					className="w-full h-full"
					value={markdown}
					onChange={(e) => setMarkdown(e.target.value)}
					placeholder="Write some markdown..."
				/>
				<div className="flex justify-end gap-2 grow">
					<Button variant="outline" onClick={() => setTextToRender(undefined)}>
						Clear
					</Button>
					<Button onClick={() => setTextToRender(markdown)}>Render</Button>
				</div>
			</div>
			<div className="w-1/2 flex p-4">
				<div className="w-full h-full border p-4 rounded-md">
					{textToRender ? (
						<Render key={textToRender} markdown={textToRender} />
					) : (
						<div className="flex items-center justify-center border border-gray-300 border-dashed rounded-sm">
							<span className="text-sm text-gray-800 p-4">
								Render some markdown to pdf
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
