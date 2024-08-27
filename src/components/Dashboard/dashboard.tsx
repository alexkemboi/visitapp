"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TopCards from "../TopCards";
import ColumnChart from "../ApexCharts/ColumnChart";
import PieChart from "../ApexCharts/PieChart";
import DataGridDemo from "../table";

const Dashboard = () => {

	const [ReactApexChart, setChart] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setChart(() => require("react-apexcharts").default);
		}
	}, []);

	return (

		<div className="flex flex-col justify-center items-center p-4 h-auto w-12/12">
			<div className="mixed-chart bg-transparent w-full">
				<TopCards />
			</div>
			<div className="w-full md:w-full flex flex-col md:flex-row gap-2 bg-transparent">
				<DataGridDemo />
			</div>
		</div>

	);
};

export default Dashboard;
