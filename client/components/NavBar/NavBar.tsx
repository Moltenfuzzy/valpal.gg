import { useState } from "react";
import {
	Header,
	Autocomplete,
	Container,
	Group,
	Burger,
	Text,
	Box,
	Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import Link from "next/link";
import useStyles from "./NavBar.styles";

export interface NavBarProps {
	links: { link: string; label: string }[];
}

export function NavBar({ links }: NavBarProps) {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: active === link.link,
			})}
			onClick={(event) => {
				event.preventDefault();
				setActive(link.link);
			}}
		>
			{link.label}
		</a>
	));

	return (
		<Header height={70} mb={120}>
			<Container size="xl" className={classes.header}>
				<Text size={30}>EatDeez</Text>
				<Autocomplete
					size="md"
					className={classes.search}
					placeholder="Search"
					// icon={<IconSearch size={16} stroke={1.5} />}
					data={[]} // put cached search history here
				/>
				<Group spacing={10} className={classes.links}>
					{items}
				</Group>
				<Box className={classes.toggle}>
					<ColorSchemeToggle />
				</Box>
				{/* check if user logged in to render */}
				<Group className={classes.register}>
					<Link href="/login">
						<Text size="md">Login</Text>
					</Link>
					<Link href="/register">
						<Text size="md">Register</Text>
					</Link>
				</Group>
				<Burger
					opened={opened}
					onClick={toggle}
					className={classes.burger}
					size="sm"
				/>
			</Container>
		</Header>
	);
}