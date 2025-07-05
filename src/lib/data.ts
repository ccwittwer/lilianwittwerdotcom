export interface ScheduleEvent {
	date: string;
	time: string;
	location: string;
	map?: string;
	team: string;
	opponent: string;
	type: string;
	result: string;
	score: string;
	teamScore: string;
	opponentScore: string;
	highlights: string | null;
	league: string;
}

/** Schedule Events */
export const scheduleEvents: ScheduleEvent[] = [
	{
		date: 'June 30, 2025',
		time: '',
		team: 'Tennessee Soccer Club',
		opponent: 'Oregon Surf',
		location: 'Surf Sports Park, Del Mar, CA',
		result: 'W 4-2',
		score: '4-2',
		teamScore: '4',
		opponentScore: '2',
		type: 'ECNL North American Cup',
		highlights: null,
		league: 'ECNL'
	},
	{
		date: 'June 28, 2025',
		time: '',
		team: 'Tennessee Soccer Club',
		opponent: 'South Shore Select',
		location: 'Surf Sports Park, Del Mar, CA',
		result: 'W 2-1',
		score: '2-1',
		teamScore: '2',
		opponentScore: '1',
		type: 'ECNL North American Cup',
		highlights: null,
		league: 'ECNL'
	},
	{
		date: 'June 27, 2025',
		time: '',
		team: 'Tennessee Soccer Club',
		opponent: 'South Carolina United',
		location: 'Surf Sports Park, Del Mar, CA',
		result: 'L 0-1',
		score: '0-1',
		teamScore: '0',
		opponentScore: '1',
		type: 'ECNL North American Cup',
		highlights: null,
		league: 'ECNL'
	}
];

/** Ticker Items */
const tickerInfo = [
	{
		category: 'NEWS',
		content: 'BGA battles, falls short of ECS in state quarterfinals - Oct 2024',
		url: 'https://www.williamsonherald.com/sports/soccer-bga-battles-falls-short-of-ecs-in-state-quarterfinals/article_2825ba52-8f11-11ef-aa5b-23a252da8271.html'
	},
	{ category: 'AWARDS', content: '2024 High School Region All-Tournament Team' },
	{ category: 'AWARDS', content: '2024 High School All-District' }
];

const tickerGames = scheduleEvents
	.filter((event) => new Date(event.date) < new Date())
	.map((event) => ({
		category: 'ECNL',
		content: `${event.date} -  ${event.team} ${event.teamScore} - ${event.opponentScore} ${event.opponent}`
	}));

export const gameStats = [...tickerGames, ...tickerInfo];

/** News Articles */
export const newsArticles = [
	{
		title: 'BGA battles, falls short of ECS in state quarterfinals',
		source: 'Williamson Herald',
		date: 'October 20, 2024',
		url: 'https://www.williamsonherald.com/sports/soccer-bga-battles-falls-short-of-ecs-in-state-quarterfinals/article_2825ba52-8f11-11ef-aa5b-23a252da8271.html'
	},
	{
		title:
			"Eighty Players Gather Outside of San Diego for Second Girls' U-14 National Identification Camp of 2024",
		source: 'US Soccer',
		date: 'May 31, 2024',
		url: 'https://www.ussoccer.com/stories/2024/05/eighty-players-gather-outside-of-san-diego-for-second-girls-u-14-national-identification-camp-of-2024'
	}
];

/** Gallery/Highlights Items */
export const galleryItems = [
	{
		thumbnail: '/bga_dribbling.JPG',
		url: 'https://www.youtube.com/embed/7OWW56b0v7k',
		description: 'Attacking & Pace',
		tags: []
	},
	{
		thumbnail: '/IMG_0700.JPEG',
		url: 'https://www.youtube.com/embed/cUNhUC8W-rc',
		description: 'Two-Footed Scoring Chances',
		tags: []
	},
	{
		thumbnail: '/BGA_passing_action_sm.jpeg',
		url: 'https://www.youtube.com/embed/hNWgmbmmHCk',
		description: 'Assisted Chances & Free Kicks',
		tags: []
	},
	{
		thumbnail: '/USN_freekick_thumbnail.png',
		url: 'https://www.youtube.com/embed/W83rNsH3IQM',
		description: 'Last second game winning free kick vs USN',
		tags: ['USN', 'Free Kick', 'Game Winning Goal']
	},
	{
		thumbnail: '/action_white.jpg',
		url: 'https://www.youtube.com/embed/HDbgXoHLR_g',
		description: 'Transition to attack',
		tags: []
	},
	'/2024_USYNT_announcement_instagram.png',
	'/all_district.jpeg',
	'/regional_all_tourney.jpeg',
	'/Oct2024_ID_Camp_annc_instagram.png'
];

/** General Player Info */
export const playerInfo = {
	name: 'Lilian Wittwer',
	position: 'Striker & Attacking Midfielder',
	hometown: 'Franklin, Tennessee',
	class: '2028',
	foot: 'Both',
	jersey: '7',
	club: 'Tennessee Soccer Club',
	school: 'Battle Ground Academy',
	gpa: '4.25'
};

/** Player Profile Info List */
export const playerInfoList = [
	{
		key: 'Name',
		value: playerInfo.name
	},
	{
		key: 'Jersey #',
		value: playerInfo.jersey
	},
	{
		key: 'Position',
		value: playerInfo.position
	},
	{
		key: 'Dominant Foot',
		value: playerInfo.foot
	},
	{
		key: 'Club',
		value: 'Tennessee Soccer Club - 2010 ECNL'
	},
	{
		key: 'School',
		value: playerInfo.school
	},
	{
		key: 'Hometown',
		value: playerInfo.hometown
	},
	{
		key: 'GPA',
		value: playerInfo.gpa
	},
	{
		key: 'NCAA ID #',
		value: '2411457668'
	}
];

/** Season Stats */
export const seasonStats = [
	{
		group: 'ECNL 2025/26',
		stats: [
			{
				category: 'Goals',
				value: '--'
			},
			{
				category: 'Assists',
				value: '--'
			},
			{
				category: 'Minutes Played',
				value: '--'
			}
		]
	},
	{
		group: 'High School 2025',
		stats: [
			{
				category: 'Goals',
				value: '--'
			},
			{
				category: 'Assists',
				value: '--'
			},
			{
				category: 'Minutes Played',
				value: '--'
			}
		]
	}
];

/** Key Achievements */
export const achievements = [
	'US Soccer U14 National ID Camp 2024',
	'4x US Soccer Talent ID Center',
	'2024 High School Region All-Tournament Team',
	'2024 High School All-District',
	'2x ODP South Region Camp',
	'TN State Cup U13 Champions 2023',
	'TN State Cup U15 Finalists 2024'
];
