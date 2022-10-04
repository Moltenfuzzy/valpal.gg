import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { AppProps } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
	MantineThemeColorsOverride,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import AuthWrapper from "../components/AuthWrapper/AuthWrapper";

const queryClient = new QueryClient();

// colors : https://mantine.dev/theming/colors/

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
	const { Component, session, ...pageProps } = props;
	const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(nextColorScheme);
		setCookie("mantine-color-scheme", nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		});
	};

	return (
		<>
			<SessionProvider session={session}>
				<AuthWrapper>
					<QueryClientProvider client={queryClient}>
						<Head>
							<title>Kentan</title>
							<meta
								name="viewport"
								content="minimum-scale=1, initial-scale=1, width=device-width"
							/>
							<link rel="shortcut icon" href="/favicon.svg" />
						</Head>

						<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
							<MantineProvider
								theme={{
									colorScheme,
									colors: {},
								}}
								withGlobalStyles
								withNormalizeCSS
							>
								<NotificationsProvider>
									<Component {...pageProps} />
								</NotificationsProvider>
							</MantineProvider>
						</ColorSchemeProvider>
						<ReactQueryDevtools />
					</QueryClientProvider>
				</AuthWrapper>
			</SessionProvider>
		</>
	);
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});
