import { Document, Image, Text, View } from "@react-pdf/renderer";
import logo from "@/components/logo.png";

import { Page } from "@react-pdf/renderer";

export const H1 = ({ children }: { children: React.ReactNode }) => (
	<Text style={{ fontSize: 24, fontWeight: "bold" }}>{children}</Text>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
	<Text style={{ fontSize: 20, fontWeight: "bold" }}>{children}</Text>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
	<Text style={{ fontSize: 16, fontWeight: "bold" }}>{children}</Text>
);

export const P = ({ children }: { children: React.ReactNode }) => (
	<Text style={{ fontSize: 12 }}>{children}</Text>
);

export const PDF = ({ children }: { children: React.ReactNode }) => (
	<Document>
		<Page
			size="A4"
			style={{
				paddingLeft: 50,
				paddingRight: 50,
				paddingTop: 10,
				paddingBottom: 50,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<View
				style={{
					paddingVertical: 20,
					display: "flex",
					flexDirection: "column",
				}}
				fixed
			>
				<Image src={logo.src} style={{ width: 100 }} />
			</View>
			<View
				style={{ flex: 1, gap: 20, flexDirection: "column", display: "flex" }}
			>
				{children}
			</View>
			<View style={{ fontSize: 10, marginTop: 50 }} fixed>
				<Text>Copyright {new Date().getFullYear()} - All rights reserved</Text>
			</View>
		</Page>
	</Document>
);
