export interface ColorScheme {
	primary: string;
	secondary: string;
	tertiary: string;
}

export const schoolColors: Record<string, ColorScheme> = {
	default: {
		primary: '#0054a2', // TSC Blue
		// secondary: '#bf1f26', // TSC Red
		secondary: '#133258', // TSC Dark Blue
		tertiary: '#8B0000' // Bright Blue
	},
	bga: {
		primary: '#002E5D', // BGA Navy Blue
		secondary: '#FFD100', // BGA Gold
		tertiary: '#FFFFFF' // White
	},
	stanford: {
		primary: '#8C1515', // Cardinal Red
		secondary: '#4D4F53', // Cool Grey
		tertiary: '#B1040E' // Bright Red
	},
	duke: {
		primary: '#003366', // Duke Blue
		secondary: '#012169', // Royal Blue
		tertiary: '#99B4D1' // Light Blue
	},
	unc: {
		primary: '#4B9CD3', // Carolina Blue
		secondary: '#13294B', // Navy
		tertiary: '#7BAFD4' // Light Carolina Blue
	},
	ucla: {
		primary: '#2774AE', // UCLA Blue
		secondary: '#FFD100', // UCLA Gold
		tertiary: '#8BB8E8' // Light Blue
	},

	northCarolina: {
		primary: '#7BAFD4', // Carolina Blue
		secondary: '#13294B', // Navy
		tertiary: '#4B9CD3' // Light Carolina Blue
	},
	notredame: {
		primary: '#0C2340', // Navy
		secondary: '#C99700', // Gold
		tertiary: '#ae9142' // Metallic Gold
	},
	fsu: {
		primary: '#782F40', // Garnet
		secondary: '#CEB888', // Gold
		tertiary: '#44484D' // Black
	},
	alabama: {
		primary: '#9E1B32', // Crimson
		secondary: '#828A8F', // Gray
		tertiary: '#FFFFFF' // White
	},
	arkansas: {
		primary: '#9D2235', // Cardinal
		secondary: '#000000', // Black
		tertiary: '#FFFFFF' // White
	},
	auburn: {
		primary: '#E87722', // Orange
		secondary: '#03244D', // Navy
		tertiary: '#A7AAAB' // Gray
	},
	byu: {
		primary: '#002E5D', // Navy
		secondary: '#FFFFFF', // White
		tertiary: '#C9C9C9' // Gray
	},
	clemson: {
		primary: '#F56600', // Orange
		secondary: '#522D80', // Purple
		tertiary: '#FFFFFF' // White
	},
	florida: {
		primary: '#0021A5', // Blue
		secondary: '#FA4616', // Orange
		tertiary: '#FFFFFF' // White
	},
	georgia: {
		primary: '#BA0C2F', // Red
		secondary: '#000000', // Black
		tertiary: '#FFFFFF' // White
	},
	kentucky: {
		primary: '#0033A0', // Blue
		secondary: '#FFFFFF', // White
		tertiary: '#C8C9C7' // Gray
	},
	lsu: {
		primary: '#461D7C', // Purple
		secondary: '#FDD023', // Gold
		tertiary: '#FFFFFF' // White
	},
	michigan: {
		primary: '#00274C', // Blue
		secondary: '#FFCB05', // Maize
		tertiary: '#FFFFFF' // White
	},
	mississippiState: {
		primary: '#660000', // Maroon
		secondary: '#FFFFFF', // White
		tertiary: '#C8C8C8' // Gray
	},
	missouri: {
		primary: '#F1B82D', // Gold
		secondary: '#000000', // Black
		tertiary: '#FFFFFF' // White
	},
	olemiss: {
		primary: '#CE1126', // Red
		secondary: '#14213D', // Navy
		tertiary: '#FFFFFF' // White
	},
	pennState: {
		primary: '#041E42', // Navy
		secondary: '#FFFFFF', // White
		tertiary: '#C6C9CC' // Gray
	},
	pitt: {
		primary: '#003594', // Royal Blue
		secondary: '#FFB81C', // Gold
		tertiary: '#FFFFFF' // White
	},
	southCarolina: {
		primary: '#73000A', // Garnet
		secondary: '#000000', // Black
		tertiary: '#FFFFFF' // White
	},
	tennessee: {
		primary: '#FF8200', // Orange
		secondary: '#58595B', // Smokey Gray
		tertiary: '#FFFFFF' // White
	},
	texasAM: {
		primary: '#500000', // Maroon
		secondary: '#FFFFFF', // White
		tertiary: '#C8C9C7' // Gray
	},
	tcu: {
		primary: '#4D1979', // Purple
		secondary: '#A3A9AC', // Gray
		tertiary: '#FFFFFF' // White
	},
	usc: {
		primary: '#990000', // Cardinal
		secondary: '#FFC72C', // Gold
		tertiary: '#FFFFFF' // White
	},
	vanderbilt: {
		primary: '#000000', // Black
		secondary: '#866D4B', // Gold
		tertiary: '#FFFFFF' // White
	},
	virginia: {
		primary: '#232D4B', // Navy
		secondary: '#F84C1E', // Orange
		tertiary: '#FFFFFF' // White
	},
	washingtonState: {
		primary: '#981E32', // Crimson
		secondary: '#5E6A71', // Gray
		tertiary: '#FFFFFF' // White
	},
	westVirginia: {
		primary: '#002855', // Blue
		secondary: '#EAAA00', // Gold
		tertiary: '#FFFFFF' // White
	},
	wisconsin: {
		primary: '#C5050C', // Red
		secondary: '#000000', // Black
		tertiary: '#FFFFFF' // White
	},
	xavier: {
		primary: '#0C2340', // Navy
		secondary: '#9EA2A2', // Gray
		tertiary: '#FFFFFF' // White
	}
};
