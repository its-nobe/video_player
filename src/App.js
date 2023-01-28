import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
	NavBar,
	Feed,
	VideoDetail,
	ChannelDetail,
	SearchField,
} from "./components/env";

export const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#000" }}>
			<NavBar />
			<Routes>
				<Route path="/" exact element={<Feed />} />
				<Route path="/video/:id" exact element={<VideoDetail />} />
				<Route path="/channel/:id" exact element={<ChannelDetail />} />
				<Route path="/search/:searchTxt" exact element={<SearchField />} />
			</Routes>
		</Box>
	</BrowserRouter>
);
