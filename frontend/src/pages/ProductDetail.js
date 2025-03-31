import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import {
  HeartIcon,
  StarIcon,
  ShoppingCartIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  BookOpenIcon,
  UserIcon,
  CalendarIcon,
  LanguageIcon,
  TagIcon,
  PencilSquareIcon,
  InformationCircleIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

// Import all book images
import book1 from '../assets/book1.jpg';
import book2 from '../assets/book2.jpg';
import bm1 from '../assets/bm1.webp';
import powerless from '../assets/powerless.jpg';
import powerless2 from '../assets/powerless_2.jpg';
import powerless3 from '../assets/powerless_3.jpg';
import divine from '../assets/divine.jpg';
import divine2 from '../assets/divine_2.jpg';
import divine3 from '../assets/divine_3.jpg';
import goodgirl from '../assets/goodgirl.jpg';
import goodgirl2 from '../assets/goodgirl_2.jpg'; 
import goodgirl3 from '../assets/goodgirl_3.jpg';
import silent from '../assets/silent.jpg';
import silent2 from '../assets/silent_2.jpg';
import silent3 from '../assets/silent3.jpg';
import badblood from '../assets/badblood.jpg';
import badblood2 from '../assets/badblood_2.jpg';
import badblood3 from '../assets/badblood_3.jpg';
import atomic from '../assets/atomic.jpeg';
import atomic2 from '../assets/atomic_2.jpeg';
import atomic3 from '../assets/atomic_3.jpeg';
import fit from '../assets/fit.png';
import fit2 from '../assets/fit_2.jpeg';
import fit3 from '../assets/fit_3.jpeg';
import ikigai from '../assets/ikigai.jpeg';
import ikigai2 from '../assets/ikigai_2.jpeg';
import ikigai3 from '../assets/ikigai_3.jpeg';
import money from '../assets/money.jpeg';
import money2 from '../assets/money_2.jpeg';
import money3 from '../assets/money_3.jpeg';
import sapiens from '../assets/sapiens.jpg';
import sapiens2 from '../assets/sapiens_2.jpg';
import sapiens3 from '../assets/sapiens_3.jpg';
import bc from '../assets/bc.jpeg';
import bc2 from '../assets/bc_2.jpeg';
import bc3 from '../assets/bc_3.jpeg';
import bs from '../assets/bs.jpeg';
import bs2 from '../assets/bs_2.jpeg';
import bs3 from '../assets/bs_3.jpeg';
import bl from '../assets/bl.jpeg';
import bl2 from '../assets/bl_1.jpeg';
import bl3 from '../assets/bl_3.jpeg';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Get wishlist from Redux store
  const wishlist = useSelector(state => state.wishlist.items);
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    shipping: false,
    returns: false,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use mock data
        const mockProducts = {
          1: {
            id: 1,
            title: 'A Good Girl\'s Guide to Murder',
            author: 'Holly Jackson',
            price: 299,
            originalPrice: 399,
            discount: 25,
            description: 'The first book in the bestselling mystery series that follows Pip Fitz-Amobi as she investigates a closed murder case for her school project. Five years ago, schoolgirl Andie Bell was murdered by her boyfriend Sal Singh. The police know he did it - everyone in town knows he did it. But having grown up in the same small town that was consumed by the crime, Pip isn\'t so sure. When she chooses the case as the topic for her final project, she starts to uncover secrets that someone in town desperately wants to stay hidden.',
            plot: 'Pip Fitz-Amobi is determined to solve the murder of Andie Bell, who was supposedly killed by Sal Singh five years ago. As Pip digs deeper into the case, she discovers that nothing is as it seems in her small town. She uncovers dark secrets, dangerous lies, and a truth that someone will kill to keep hidden.',
            aboutAuthor: 'Holly Jackson is a British author of young adult fiction. She started writing stories at a young age and studied Creative Writing at university. "A Good Girl\'s Guide to Murder" is her debut novel and the first in a bestselling series that has captivated readers worldwide.',
            images: [
              goodgirl,
              goodgirl2,
              goodgirl3
            ],
            rating: 4.5,
            numReviews: 120,
            inStock: true,
            stockCount: 15,
            isbn: '978-1405293181',
            publisher: 'Electric Monkey',
            publishDate: 'May 2, 2019',
            language: 'English',
            pages: 433,
            genre: ['Young Adult', 'Mystery', 'Thriller', 'Contemporary'],
            awards: ['Waterstones Children\'s Book Prize for Older Readers Nominee (2020)', 'Goodreads Choice Award Nominee for Young Adult Fiction (2020)'],
            features: [
              'Paperback',
              '433 pages',
              'Part 1 of the Good Girl\'s Guide to Murder series',
              'Includes maps and interview transcripts',
              'Suitable for ages 14+'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'BookLover22',
                rating: 5,
                title: 'Couldn\'t put it down!',
                comment: 'This book had me on the edge of my seat from beginning to end. The plot twists were amazing and I loved the main character. Highly recommend for mystery fans!',
                date: '2023-12-15'
              },
              {
                user: 'MysteryFan',
                rating: 4,
                title: 'Great debut novel',
                comment: 'Holly Jackson has created a compelling mystery with well-developed characters. The format with interview transcripts and notes adds a unique touch.',
                date: '2023-11-28'
              }
            ]
          },
          2: {
            id: 2,
            title: 'Good Girl, Bad Blood',
            author: 'Holly Jackson',
            price: 299,
            originalPrice: 399,
            discount: 25,
            description: 'The second book in the series where Pip has sworn off detective work after solving the Andie Bell case. But when a friend\'s brother goes missing and the police won\'t help, Pip is pulled back into the world of investigating. This time, she\'s documenting it all on her podcast, and everyone is listening.',
            plot: 'After the events of "A Good Girl\'s Guide to Murder," Pip is done with detective work. But when Jamie Reynolds disappears on the night of the town\'s commemoration for the victim of Pip\'s last case, she feels compelled to investigate. As Pip records her findings for her popular podcast, she uncovers more than she bargained for, putting herself in danger once again.',
            aboutAuthor: 'Holly Jackson continued her success with this thrilling sequel. Her ability to create intricate mysteries with compelling characters has established her as a prominent voice in young adult thriller fiction. Jackson studied Creative Writing at the University of Nottingham.',
            images: [
              badblood,
              badblood2,
              badblood3
            ],
            rating: 4.3,
            numReviews: 98,
            inStock: true,
            stockCount: 10,
            isbn: '978-1405297752',
            publisher: 'Electric Monkey',
            publishDate: 'April 30, 2020',
            language: 'English',
            pages: 417,
            genre: ['Young Adult', 'Mystery', 'Thriller', 'Contemporary'],
            awards: ['Goodreads Choice Award Nominee for Young Adult Fiction (2021)'],
            features: [
              'Paperback',
              '417 pages',
              'Part 2 of the Good Girl\'s Guide to Murder series',
              'Includes social media posts and podcast transcripts',
              'Suitable for ages 14+'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'SeriesFanatic',
                rating: 5,
                title: 'Even better than the first!',
                comment: 'Holly Jackson has outdone herself with this sequel. The podcast elements add a new dimension to the storytelling, and the mystery is incredibly well-crafted.',
                date: '2024-01-10'
              },
              {
                user: 'BookishGirl',
                rating: 4,
                title: 'Compelling follow-up',
                comment: 'I enjoyed seeing how Pip has developed since the first book, and the new mystery kept me guessing until the end.',
                date: '2023-12-05'
              }
            ]
          },
          3: {
            id: 3,
            title: 'Powerless',
            author: 'Lauren Roberts',
            price: 399,
            originalPrice: 499,
            discount: 20,
            description: 'In a world where everyone has a power, Paige is the dangerous exception. Set in a society where supernatural abilities determine your fate, this thrilling fantasy romance follows Paige Layne, a girl born without powers in a world where being powerless is a death sentence. When she\'s discovered, she\'s forced to compete in a tournament against powered champions, where she must rely on her wit and training to survive.',
            plot: 'Paige Layne has managed to hide her lack of powers for seventeen years in a society that executes the powerless. When her secret is discovered, she\'s given a choice: compete in a tournament against powered champions, or face execution. As she navigates the deadly competition, she forms an unexpected alliance with Hawkins, the most powerful champion. Together, they uncover secrets that could change everything about their world.',
            aboutAuthor: 'Lauren Roberts is a rising star in the fantasy romance genre. Powerless is her debut novel, which quickly gained popularity through BookTok and other social media platforms. Roberts is known for creating compelling worlds and characters that resonate with readers looking for both adventure and romance.',
            images: [
              powerless,
              powerless2,
              powerless3
            ],
            rating: 4.7,
            numReviews: 150,
            inStock: true,
            stockCount: 20,
            isbn: '978-1665944878',
            publisher: 'Simon & Schuster Books for Young Readers',
            publishDate: 'August 1, 2023',
            language: 'English',
            pages: 464,
            genre: ['Young Adult', 'Fantasy', 'Romance', 'Dystopian'],
            awards: ['Barnes & Noble YA Book Club Pick (August 2023)'],
            features: [
              'Hardcover',
              '464 pages',
              'Standalone novel with sequel potential',
              'Includes map of Aster',
              'Suitable for ages 14+'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'FantasyLover',
                rating: 5,
                title: 'A breathtaking debut!',
                comment: 'I couldn\'t put this book down! The world-building is exceptional, and Paige is such a compelling protagonist. The romance is perfectly balanced with the action and intrigue.',
                date: '2024-02-15'
              },
              {
                user: 'BookDragon',
                rating: 5,
                title: 'New favorite fantasy romance',
                comment: 'Everything about this book is amazing - the characters, the plot, the romance. Lauren Roberts has created something truly special here.',
                date: '2024-01-20'
              }
            ]
          },
          4: {
            id: 4,
            title: 'Divine Rivals',
            author: 'Rebecca Ross',
            price: 349,
            originalPrice: 449,
            discount: 22,
            description: 'A sweeping, romantic fantasy novel about two rival journalists who find themselves on opposite sides of a war written by the gods. When Iris Winnow and Roman Kitt receive magical typewriters that connect them despite distance, they form a connection that transcends their rivalry, even as the world around them descends into divine conflict.',
            plot: 'After losing her brother to the ongoing war, Iris Winnow leaves home to pursue her dream of becoming a journalist. When she lands a job at the Oath Gazette, she finds herself competing with the infuriating yet charming Roman Kitt. As they each receive magical typewriters that connect them across distances, they develop a deep bond. But as the war between the gods Enva and Dacre escalates, Iris and Roman find themselves on opposing sides of the conflict, testing their growing feelings for each other.',
            aboutAuthor: 'Rebecca Ross is the internationally bestselling author of several fantasy novels. Known for her lyrical prose and imaginative worldbuilding, Ross creates stories that blend romance, magic, and coming-of-age themes. Before becoming a full-time writer, she worked in a library where she was surrounded by stories that inspired her own.',
            images: [
              divine,
              divine2,
              divine3
            ],
            rating: 4.6,
            numReviews: 85,
            inStock: true,
            stockCount: 12,
            isbn: '978-1250857422',
            publisher: 'Wednesday Books',
            publishDate: 'April 4, 2023',
            language: 'English',
            pages: 368,
            genre: ['Young Adult', 'Fantasy', 'Romance', 'Historical Fantasy'],
            awards: ['Indie Next List Pick (April 2023)'],
            features: [
              'Hardcover',
              '368 pages',
              'Book 1 in the Letters of Enchantment series',
              'Includes detailed map of Dacre and Enva',
              'Suitable for ages 14+'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'RomanceReader',
                rating: 5,
                title: 'Absolutely enchanting!',
                comment: 'Divine Rivals has everything I love in a fantasy romance - beautiful writing, a unique magic system, and a slow-burn romance that had me swooning. The typewriter letters between Iris and Roman are pure magic!',
                date: '2023-12-22'
              },
              {
                user: 'MagicBookworm',
                rating: 4,
                title: 'Wonderful world-building',
                comment: 'Rebecca Ross has created a fascinating world where gods and mortals collide. The historical newspaper setting adds a unique touch to the fantasy elements.',
                date: '2023-11-15'
              }
            ]
          },
          5: {
            id: 5,
            title: 'The Silent Patient',
            author: 'Alex Michaelides',
            price: 399,
            originalPrice: 499,
            discount: 20,
            description: 'A psychological thriller about a woman\'s act of violence against her husband—and her refusal to speak about it afterward. Alicia Berenson\'s life seems perfect. A famous painter married to a successful fashion photographer, she lives in a grand house in one of London\'s most desirable areas. One evening, her husband Gabriel returns home late, and Alicia shoots him five times in the face and then never speaks another word.',
            plot: 'Forensic psychotherapist Theo Faber becomes obsessed with uncovering the mystery of why Alicia Berenson stopped speaking after murdering her husband. As he delves into her past and the events leading up to that fateful night, he begins to unravel secrets that someone is determined to keep hidden. The truth about Alicia\'s silence is more shocking than anyone could have imagined.',
            aboutAuthor: 'Alex Michaelides was born in Cyprus to a Greek-Cypriot father and English mother. He studied English literature at Cambridge University and received an MA in screenwriting from the American Film Institute. Before writing "The Silent Patient," he worked as a screenwriter for several films. His debut novel became an instant #1 New York Times bestseller and has been translated into more than 50 languages.',
            images: [
              silent,
              silent2,
              silent3
            ],
            rating: 4.4,
            numReviews: 200,
            inStock: true,
            stockCount: 8,
            isbn: '978-1250301697',
            publisher: 'Celadon Books',
            publishDate: 'February 5, 2019',
            language: 'English',
            pages: 336,
            genre: ['Thriller', 'Mystery', 'Psychological Fiction', 'Suspense'],
            awards: ['Goodreads Choice Award for Mystery & Thriller (2019)'],
            features: [
              'Paperback',
              '336 pages',
              'Debut novel',
              'Includes discussion questions for book clubs',
              'International bestseller'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'ThrillerFan',
                rating: 5,
                title: 'Mindblowing twist!',
                comment: 'I\'ve read many psychological thrillers, but the twist in this one genuinely surprised me. Couldn\'t put it down and finished it in one sitting!',
                date: '2024-02-05'
              },
              {
                user: 'BookClubQueen',
                rating: 4,
                title: 'Perfect book club pick',
                comment: 'Our book club had so much to discuss with this one. The psychological aspects and the unreliable narration made for a fascinating read.',
                date: '2024-01-12'
              }
            ]
          },
          6: {
            id: 6,
            title: 'Atomic Habits',
            author: 'James Clear',
            price: 1199,
            originalPrice: 1499,
            discount: 20,
            description: 'An easy and proven way to build good habits and break bad ones. Tiny changes, remarkable results. In Atomic Habits, James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you\'re having trouble changing your habits, the problem isn\'t you. The problem is your system. Bad habits repeat themselves not because you don\'t want to change, but because you have the wrong system for change.',
            plot: 'The book dives into cutting-edge psychology and neuroscience to explain why habits matter and how the compounding effect of tiny changes can dramatically transform your life. Clear distills complex topics into simple behaviors that can be easily applied to daily life. Along with the science of habit formation, the book presents compelling stories from Olympic gold medalists, award-winning artists, business leaders, and distinguished scientists who have used the science of small habits to master their craft and rise to the top of their fields.',
            aboutAuthor: 'James Clear is an author, entrepreneur, and photographer whose work on habits and continuous improvement reaches a growing audience of millions each year. His website, jamesclear.com, receives millions of visitors each month, and his email newsletter has over 1 million subscribers. His work has appeared in publications including the New York Times, Forbes, and Business Insider. He is one of the world\'s leading experts on habit formation, focusing on the practical ways to transform daily habits.',
            images: [
              atomic,
              atomic2,
              atomic3
            ],
            rating: 4.8,
            numReviews: 527,
            inStock: true,
            stockCount: 45,
            isbn: '978-0735211292',
            publisher: 'Avery',
            publishDate: 'October 16, 2018',
            language: 'English',
            pages: 320,
            genre: ['Self-Help', 'Personal Development', 'Psychology', 'Business'],
            awards: ['Goodreads Choice Award Nominee for Nonfiction (2018)'],
            features: [
              'Hardcover',
              '320 pages',
              'Includes practical exercises',
              'Features real-world success stories',
              '#1 New York Times Bestseller'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '1-3 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'ProductivityGuru',
                rating: 5,
                title: 'Life-changing approach to habits',
                comment: 'This book has completely changed how I approach my daily routines. The 1% improvement philosophy is something I now apply to everything.',
                date: '2023-12-15'
              },
              {
                user: 'BusinessLeader',
                rating: 5,
                title: 'Essential reading for everyone',
                comment: 'I\'ve recommended this to my entire team. Clear\'s approach is practical, science-based, and immediately applicable.',
                date: '2024-01-03'
              }
            ]
          },
          
          7: {
            id: 7,
            title: 'Ikigai',
            author: 'Héctor García & Francesc Miralles',
            price: 899,
            originalPrice: 999,
            discount: 10,
            description: 'The Japanese secret to a long and happy life. Discover how to live with purpose and joy every day. According to the Japanese, everyone has an ikigai—a reason for being. Some have found it, others are still searching. This book brings together the Japanese concept of finding your purpose in life with the secrets of the world\'s longest-living people, revealing the way to happiness and longevity.',
            plot: 'The authors traveled to Okinawa, Japan—home to the largest population of centenarians in the world—to uncover the secrets of their longevity and happiness. They interviewed residents about their lifestyle habits, diet, exercise routines, and social connections. The book weaves together these findings with scientific research on longevity, mindfulness, and flow to present a comprehensive approach to finding your purpose and living a longer, happier life.',
            aboutAuthor: 'Héctor García is a Japanese-Spanish writer who has lived in Japan since 2004. He is the author of several books about Japanese culture, including "A Geek in Japan." Francesc Miralles is a Spanish writer, essayist, composer, and journalist who has written a number of bestselling self-help and inspirational books. Together, they spent years researching the concept of ikigai, traveling to the Japanese island of Okinawa to study the habits and philosophy of its inhabitants.',
            images: [
              ikigai,
              ikigai2,
              ikigai3
            ],
            rating: 4.6,
            numReviews: 385,
            inStock: true,
            stockCount: 32,
            isbn: '978-0143130727',
            publisher: 'Penguin Life',
            publishDate: 'August 29, 2017',
            language: 'English',
            pages: 208,
            genre: ['Self-Help', 'Philosophy', 'Eastern Wisdom', 'Health'],
            awards: ['International Bestseller'],
            features: [
              'Paperback',
              '208 pages',
              'Includes diagrams and illustrations',
              'Practical exercises for finding your ikigai',
              'Translated from Spanish'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'MindfulnessPractitioner',
                rating: 5,
                title: 'Beautiful wisdom for modern life',
                comment: 'This small book contains so much wisdom about living a meaningful life. The Okinawan principles are both simple and profound.',
                date: '2023-11-20'
              },
              {
                user: 'WellnessCoach',
                rating: 4,
                title: 'Great introduction to purpose-driven living',
                comment: 'A perfect blend of Eastern philosophy and practical advice. The illustrations and diagrams make complex concepts easy to understand.',
                date: '2024-02-18'
              }
            ]
          },
          
          8: {
            id: 8,
            title: 'Sapiens',
            author: 'Yuval Noah Harari',
            price: 1299,
            originalPrice: 1599,
            discount: 19,
            description: 'A brief history of humankind. The groundbreaking narrative of humanity\'s creation and evolution. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, Sapiens integrates history and science to reconsider accepted narratives, connect past developments with contemporary concerns, and examine specific events within the context of larger ideas.',
            plot: 'Spanning the whole of human history, from the very first humans to walk the earth to the radical breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions, Harari traces how humans came to dominate the planet and examines the current human condition. He explores how biology and history have defined us and enhanced our understanding of what it means to be "human." The book challenges everything we thought we knew about being human: our thoughts, our actions, our power, and our future.',
            aboutAuthor: 'Yuval Noah Harari is an Israeli historian and a tenured professor in the Department of History at the Hebrew University of Jerusalem. He specializes in world history, medieval history, and military history. Harari received his PhD from the University of Oxford in 2002. Following the success of Sapiens, he published Homo Deus and 21 Lessons for the 21st Century, creating a trilogy exploring the past, future, and present of humanity. His books have sold over 40 million copies worldwide.',
            images: [
              sapiens,
              sapiens2,
              sapiens3
            ],
            rating: 4.7,
            numReviews: 642,
            inStock: true,
            stockCount: 38,
            isbn: '978-0062316097',
            publisher: 'Harper',
            publishDate: 'February 10, 2015',
            language: 'English',
            pages: 464,
            genre: ['History', 'Anthropology', 'Science', 'Philosophy'],
            awards: ['Goodreads Choice Award for Science & Technology (2015)', 'Royal Society of Biology Book Award (2015)'],
            features: [
              'Hardcover',
              '464 pages',
              'Includes illustrations and maps',
              'International bestseller',
              'Translated into over 60 languages'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'HistoryBuff',
                rating: 5,
                title: 'Mind-expanding overview of human history',
                comment: 'Harari has an incredible ability to synthesize complex historical developments and make them accessible. This book changed how I view our species and our place in the world.',
                date: '2023-10-05'
              },
              {
                user: 'ThoughtfulReader',
                rating: 4,
                title: 'Provocative and enlightening',
                comment: 'While I don\'t agree with all of Harari\'s conclusions, the questions he raises and perspectives he offers are invaluable for anyone interested in understanding humanity\'s journey.',
                date: '2024-01-22'
              }
            ]
          },
          
          9: {
            id: 9,
            title: 'Psychology of Money',
            author: 'Morgan Housel',
            price: 999,
            originalPrice: 1299,
            discount: 23,
            description: 'Timeless lessons on wealth, greed, and happiness. How to better understand one\'s relationship with money. The book explores how our personal experiences, unique perspectives, ego, pride, marketing, and odd incentives are often more powerful than financial knowledge when it comes to money decisions.',
            plot: 'Through 19 short stories, the book explores the strange ways people think about money and teaches you how to make better sense of one of life\'s most important matters. Rather than presenting a how-to guide for investment, Housel shares insights about how to think about money, risk, rewards, and learning from both our own financial decisions and those of others. The book emphasizes that financial success is more about behavior than knowledge, and that doing well with money has little to do with how smart you are and a lot to do with how you behave.',
            aboutAuthor: 'Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal. He is a two-time winner of the Best in Business Award from the Society of American Business Editors and Writers, winner of the New York Times Sidney Award, and a two-time finalist for the Gerald Loeb Award for Distinguished Business and Financial Journalism. He has presented at more than 100 conferences in a dozen countries.',
            images: [
              money,
              money2,
              money3
            ],
            rating: 4.7,
            numReviews: 412,
            inStock: true,
            stockCount: 25,
            isbn: '978-0593330425',
            publisher: 'Harriman House',
            publishDate: 'September 8, 2020',
            language: 'English',
            pages: 256,
            genre: ['Finance', 'Personal Finance', 'Psychology', 'Business'],
            awards: ['Goodreads Choice Award Nominee for Business & Finance (2020)'],
            features: [
              'Hardcover',
              '256 pages',
              'Includes real-world examples',
              'Wall Street Journal Bestseller',
              'Financial Times Business Book of the Month Award'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'InvestmentAdvisor',
                rating: 5,
                title: 'Required reading for financial wisdom',
                comment: 'I\'ve recommended this book to all my clients. Housel captures the psychological and emotional aspects of money in a way technical finance books never do.',
                date: '2024-02-08'
              },
              {
                user: 'PersonalFinanceGuru',
                rating: 5,
                title: 'Wisdom over formulas',
                comment: 'This isn\'t about investment strategies but about the mindset needed for financial success. The storytelling approach makes the lessons stick in a way that traditional finance books don\'t.',
                date: '2023-09-14'
              }
            ]
          },
          
          10: {
            id: 10,
            title: 'The Fitness Mindset',
            author: 'Brian Keane',
            price: 849,
            originalPrice: 999,
            discount: 15,
            description: 'Eat for energy, train for tension, manage your mindset, and reap the results. Transform your body and mind. The book offers a combination of effective fitness routines, nutritional strategies, and mindset shifts that will help readers achieve the body they\'ve always wanted and live a healthier life.',
            plot: 'Brian Keane breaks down the fundamental principles of fitness and nutrition in an accessible way, explaining not just what to do but why you should do it. The book covers everything from macro-nutrition and training principles to goal setting and developing mental resilience. Keane draws from his experience as a fitness competitor, personal trainer, and former school teacher to create a comprehensive guide that addresses both the physical and psychological aspects of fitness transformation.',
            aboutAuthor: 'Brian Keane is a fitness entrepreneur, international speaker, and podcast host. After leaving his job as a primary school teacher, he established himself as a leading figure in the fitness industry. His work combines traditional fitness and nutrition knowledge with a focus on mindset and habit formation. Keane has competed in fitness model competitions around the world and has worked with thousands of clients through his online coaching programs. His podcast, the Brian Keane Fitness Podcast, attracts listeners from over 130 countries.',
            images: [
              fit,
              fit2,
              fit3
            ],
            rating: 4.5,
            numReviews: 256,
            inStock: true,
            stockCount: 18,
            isbn: '978-1527207219',
            publisher: 'Rethink Press',
            publishDate: 'January 1, 2017',
            language: 'English',
            pages: 202,
            genre: ['Health & Fitness', 'Nutrition', 'Self-Help', 'Sports'],
            awards: ['Top Fitness Book on Amazon UK (2017)'],
            features: [
              'Paperback',
              '202 pages',
              'Includes meal plans and workout examples',
              'Features motivational strategies',
              'Practical approach to sustainable fitness'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '2-4 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'FitnessEnthusiast',
                rating: 5,
                title: 'Finally, fitness advice that works!',
                comment: 'What sets this book apart is its balanced approach to fitness. Keane understands that the mental aspect is just as important as the physical training.',
                date: '2023-12-01'
              },
              {
                user: 'NewToFitness',
                rating: 4,
                title: 'Great for beginners',
                comment: 'As someone just starting their fitness journey, I found this book incredibly approachable. The explanations are clear, and the advice is practical and doable.',
                date: '2024-03-15'
              }
            ]
          },
          11: {
            id: 11,
            title: 'Atomic Habits (Audiobook)',
            author: 'James Clear',
            price: 699,
            originalPrice: 899,
            discount: 22,
            description: 'The audio version of the bestselling book on habit formation. Listen on the go. Narrated by the author himself, this audiobook provides the same powerful insights as the print version with the convenience of audio listening.',
            plot: 'The audiobook version delivers Clear\'s revolutionary framework for improving every day, focusing on tiny changes that yield remarkable results. Through engaging narration, the author explains how habits form, how to break bad ones and build good ones, and how small adjustments in behavior can lead to impressive outcomes. The audio format makes it easy to absorb these concepts during commutes, workouts, or while relaxing at home.',
            aboutAuthor: 'James Clear is an author, entrepreneur, and photographer whose work on habits and continuous improvement reaches a growing audience of millions each year. His website, jamesclear.com, receives millions of visitors each month, and his email newsletter has over 1 million subscribers. Clear personally narrates this audiobook, bringing his expertise and passion to the audio format.',
            images: [
              atomic,
              atomic2,
              atomic3
            ],
            rating: 4.9,
            numReviews: 312,
            inStock: true,
            stockCount: 'Unlimited',
            isbn: '978-1524779269',
            publisher: 'Random House Audio',
            publishDate: 'October 16, 2018',
            language: 'English',
            length: '5 hours 35 minutes',
            genre: ['Self-Help', 'Personal Development', 'Psychology', 'Business'],
            awards: ['Audible Editors Select', 'AudioFile Earphones Award Winner'],
            features: [
              'MP3 Audiobook',
              'Narrated by James Clear',
              'Unabridged',
              'Instant digital delivery',
              'Compatible with all devices'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: 'Instant download',
              expressAvailable: false
            },
            returns: {
              returnable: true,
              period: '7 days',
              condition: 'Digital product return policy applies'
            },
            reviews: [
              {
                user: 'AudioBookLover',
                rating: 5,
                title: 'Even better as an audiobook',
                comment: 'Clear\'s narration adds so much to the experience. I found myself able to retain the concepts better by listening to them during my commute.',
                date: '2024-01-30'
              },
              {
                user: 'BusyProfessional',
                rating: 5,
                title: 'Perfect for my lifestyle',
                comment: 'I don\'t have time to sit down with a book, so this audiobook was the perfect solution. The narration is engaging and the content is life-changing.',
                date: '2023-12-12'
              }
            ]
          },
          
          12: {
            id: 12,
            title: 'The Silent Patient (Audiobook)',
            author: 'Alex Michaelides',
            price: 599,
            originalPrice: 749,
            discount: 20,
            description: 'The audio version of the psychological thriller that took the world by storm. Experience the suspense and shocking twists through captivating narration.',
            plot: 'This audiobook brings to life the story of Alicia Berenson, a famous painter who shoots her husband five times and then never speaks another word. The narration enhances the psychological suspense as forensic psychotherapist Theo Faber becomes obsessed with uncovering the mystery of Alicia\'s silence. The audiobook format adds a new dimension to the shocking twists and revelations that have made this thriller a global phenomenon.',
            aboutAuthor: 'Alex Michaelides was born in Cyprus to a Greek-Cypriot father and English mother. He studied English literature at Cambridge University and received an MA in screenwriting from the American Film Institute. Before writing "The Silent Patient," he worked as a screenwriter for several films. His debut novel became an instant #1 New York Times bestseller and has been translated into more than 50 languages.',
            images: [
              silent,
              silent2,
              silent3
            ],
            rating: 4.7,
            numReviews: 185,
            inStock: true,
            stockCount: 'Unlimited',
            isbn: '978-1250317544',
            publisher: 'Macmillan Audio',
            publishDate: 'February 5, 2019',
            language: 'English',
            length: '8 hours 43 minutes',
            genre: ['Thriller', 'Mystery', 'Psychological Fiction', 'Suspense'],
            awards: ['Goodreads Choice Award for Mystery & Thriller (2019)', 'AudioFile Earphones Award Winner'],
            features: [
              'MP3 Audiobook',
              'Narrated by Jack Hawkins and Louise Brealey',
              'Unabridged',
              'Instant digital delivery',
              'Enhanced audio experience with professional narration'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: 'Instant download',
              expressAvailable: false
            },
            returns: {
              returnable: true,
              period: '7 days',
              condition: 'Digital product return policy applies'
            },
            reviews: [
              {
                user: 'MysteryFan',
                rating: 5,
                title: 'Even more thrilling as an audiobook',
                comment: 'The narrators bring such intensity to this story. I was completely absorbed and couldn\'t stop listening until the shocking conclusion!',
                date: '2024-02-18'
              },
              {
                user: 'CommuterListener',
                rating: 4,
                title: 'Made my commute fly by',
                comment: 'This audiobook had me sitting in my car long after arriving at my destination just to hear a little more. The performances are outstanding.',
                date: '2023-11-05'
              }
            ]
          },
          
          13: {
            id: 13,
            title: 'Sapiens (Audiobook)',
            author: 'Yuval Noah Harari',
            price: 799,
            originalPrice: 999,
            discount: 20,
            description: 'The audio journey through the history of humankind. Perfect for commutes. Listen to this groundbreaking narrative of humanity\'s creation and evolution wherever you go.',
            plot: 'This audiobook delivers Harari\'s sweeping history of humankind with engaging narration that brings to life the Cognitive, Agricultural, and Scientific Revolutions. From examining the role evolving humans have played in the global ecosystem to charting the rise of empires, the audio format makes complex historical concepts accessible and entertaining. The narration enhances Harari\'s exploration of how humanity came to dominate the planet and what it means to be "human."',
            aboutAuthor: 'Yuval Noah Harari is an Israeli historian and a tenured professor in the Department of History at the Hebrew University of Jerusalem. He specializes in world history, medieval history, and military history. Harari received his PhD from the University of Oxford in 2002. Following the success of Sapiens, he published Homo Deus and 21 Lessons for the 21st Century, creating a trilogy exploring the past, future, and present of humanity.',
            images: [
              sapiens,
              sapiens2,
              sapiens3
            ],
            rating: 4.8,
            numReviews: 276,
            inStock: true,
            stockCount: 'Unlimited',
            isbn: '978-0062796233',
            publisher: 'Harper Audio',
            publishDate: 'February 10, 2015',
            language: 'English',
            length: '15 hours 17 minutes',
            genre: ['History', 'Anthropology', 'Science', 'Philosophy'],
            awards: ['Audible Editors Select', 'AudioFile Best Voice Award'],
            features: [
              'MP3 Audiobook',
              'Narrated by Derek Perkins',
              'Unabridged',
              'Instant digital delivery',
              'Professional narration enhances complex historical concepts'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: 'Instant download',
              expressAvailable: false
            },
            returns: {
              returnable: true,
              period: '7 days',
              condition: 'Digital product return policy applies'
            },
            reviews: [
              {
                user: 'HistoryBuff',
                rating: 5,
                title: 'History comes alive through audio',
                comment: 'The narrator\'s voice is perfect for this sweeping historical account. I absorbed so much more by listening than I would have by reading.',
                date: '2023-08-20'
              },
              {
                user: 'DailyLearner',
                rating: 5,
                title: 'Makes complex ideas digestible',
                comment: 'I listen during my workout every day, and this audiobook makes big historical concepts easy to understand. The narration keeps me engaged throughout.',
                date: '2024-01-15'
              }
            ]
          },
          
          14: {
            id: 14,
            title: 'Psychology of Money (Audiobook)',
            author: 'Morgan Housel',
            price: 649,
            originalPrice: 799,
            discount: 19,
            description: 'Listen to timeless lessons about wealth and happiness. An enlightening audio experience. This audiobook brings Morgan Housel\'s financial wisdom to life through professional narration.',
            plot: 'The audiobook transforms Housel\'s 19 short stories about money into an engaging listening experience. Through clear narration, listeners learn how personal experiences, unique perspectives, ego, pride, marketing, and odd incentives influence our financial decisions more than knowledge. The audio format makes it easy to absorb these valuable insights about wealth, greed, and happiness during commutes, workouts, or everyday activities.',
            aboutAuthor: 'Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal. He is a two-time winner of the Best in Business Award from the Society of American Business Editors and Writers, winner of the New York Times Sidney Award, and a two-time finalist for the Gerald Loeb Award for Distinguished Business and Financial Journalism. His clear writing style translates perfectly to the audiobook format.',
            images: [
              money,
              money2,
              money3
            ],
            rating: 4.6,
            numReviews: 198,
            inStock: true,
            stockCount: 'Unlimited',
            isbn: '978-1094216737',
            publisher: 'Harriman House',
            publishDate: 'September 8, 2020',
            language: 'English',
            length: '5 hours 48 minutes',
            genre: ['Finance', 'Personal Finance', 'Psychology', 'Business'],
            awards: ['Audible Best of the Year in Business & Finance (2020)'],
            features: [
              'MP3 Audiobook',
              'Narrated by Chris Hill',
              'Unabridged',
              'Instant digital delivery',
              'Enhanced audio experience for financial wisdom'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: 'Instant download',
              expressAvailable: false
            },
            returns: {
              returnable: true,
              period: '7 days',
              condition: 'Digital product return policy applies'
            },
            reviews: [
              {
                user: 'FinanceNewbie',
                rating: 5,
                title: 'Financial wisdom on the go',
                comment: 'I\'ve listened to this audiobook three times now. Each time I pick up new insights about money and behavior. Perfect for listening during commutes.',
                date: '2023-12-05'
              },
              {
                user: 'InvestmentAdvisor',
                rating: 4,
                title: 'Great narration of valuable content',
                comment: 'As someone who advises others on money, I found the audiobook format perfect for reinforcing these important psychological aspects of finance.',
                date: '2024-02-20'
              }
            ]
          },
          
          15: {
            id: 15,
            title: 'Premium Bookmark Set',
            author: 'BookWorm Accessories',
            price: 299,
            originalPrice: 399,
            discount: 25,
            description: 'Set of 5 premium bookmarks with different designs. Perfect for avid readers who want to keep track of their progress in multiple books simultaneously.',
            plot: null,
            aboutAuthor: 'BookWorm Accessories is a boutique stationery and reading accessories company founded by avid readers. They specialize in creating high-quality, beautiful, and functional products for book lovers. Their design team draws inspiration from classic literature, nature, and contemporary art to create accessories that enhance the reading experience.',
            images: [
              bm1,
              bm1,
              bm1
            ],
            rating: 4.4,
            numReviews: 87,
            inStock: true,
            stockCount: 50,
            isbn: null,
            publisher: null,
            publishDate: null,
            language: 'N/A',
            dimensions: '2.0 x 8.0 inches (each bookmark)',
            genre: null,
            awards: null,
            features: [
              'Set of 5 unique designs',
              'Made from durable laminated cardstock',
              'Gold foil accents',
              'Tassels in different colors',
              'Gift box included'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '1-3 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'BookCollector',
                rating: 5,
                title: 'Beautiful and functional',
                comment: 'These bookmarks are not only gorgeous but also sturdy enough to last through many books. The tassels add a lovely touch.',
                date: '2024-01-18'
              },
              {
                user: 'GiftGiver',
                rating: 4,
                title: 'Perfect gift for readers',
                comment: 'I bought these as a gift for my book-loving friend and she absolutely loved them. The presentation box makes them extra special.',
                date: '2023-12-25'
              }
            ]
          },
          
          16: {
            id: 16,
            title: 'Book Stand',
            author: 'ReadEasy',
            price: 499,
            originalPrice: 699,
            discount: 29,
            description: 'Adjustable book stand for comfortable reading. Foldable and portable. This ergonomic stand holds your book open at the perfect angle, reducing neck and eye strain.',
            plot: null,
            aboutAuthor: 'ReadEasy is a company dedicated to creating ergonomic solutions for readers. Founded by a team of designers who are also passionate readers, the company focuses on developing products that make reading more comfortable and accessible. Their book stands and reading accessories are designed with both functionality and aesthetics in mind, using sustainable materials whenever possible.',
            images: [
              bs,
              bs2,
              bs3
            ],
            rating: 4.3,
            numReviews: 65,
            inStock: true,
            stockCount: 22,
            isbn: null,
            publisher: null,
            publishDate: null,
            language: 'N/A',
            dimensions: '10.5 x 7.3 x 1.2 inches (folded)',
            genre: null,
            awards: null,
            features: [
              'Adjustable to 7 different angles',
              'Page holders to keep book open',
              'Folds flat for easy storage',
              'Non-slip base',
              'Compatible with books of all sizes',
              'Made from premium bamboo'
            ],
            shipping: {
              freeShipping: true,
              estimatedDelivery: '1-3 business days',
              expressAvailable: true
            },
            returns: {
              returnable: true,
              period: '30 days',
              condition: 'Unused and in original packaging'
            },
            reviews: [
              {
                user: 'BookCollector',
                rating: 5,
                title: 'Beautiful and functional',
                comment: 'These bookmarks are not only gorgeous but also sturdy enough to last through many books. The tassels add a lovely touch.',
                date: '2024-01-18'
              },
              {
                user: 'GiftGiver',
                rating: 4,
                title: 'Perfect gift for readers',
                comment: 'I bought these as a gift for my book-loving friend and she absolutely loved them. The presentation box makes them extra special.',
                date: '2023-12-25'
              }
            ]
          }
        };

        const productData = mockProducts[id];
        if (productData) {
          setProduct(productData);
          setError(null);
          
          // Check if the product is in the wishlist
          const isInWishlist = wishlist.some(item => item.id === parseInt(id));
          setIsWishlisted(isInWishlist);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to load product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id, wishlist]);

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ 
      product: {
        id: product.id,
        title: product.title,
        author: product.author,
        price: product.price,
        image: product.images[0],
        description: product.description
      },
      quantity 
    }));
    
    // Show a toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md transition-opacity duration-500 ease-in-out';
    toast.innerHTML = `
      <div class="flex items-center">
        <div class="py-1"><svg class="h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg></div>
        <div>
          <p class="font-bold">Added to cart!</p>
          <p class="text-sm">${product.title} (${quantity} item${quantity > 1 ? 's' : ''})</p>
        </div>
      </div>
    `;
    document.body.appendChild(toast);
    
    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 500);
    }, 3000);
  };

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
    setIsWishlisted(!isWishlisted);
  };
  
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const getRelatedProducts = () => {
    const mockProducts = {
      1: {
        id: 2,
        title: 'Good Girl, Bad Blood',
        author: 'Holly Jackson',
        price: 299,
        image: badblood,
        rating: 4.3
      },
      2: {
        id: 1,
        title: 'A Good Girl\'s Guide to Murder',
        author: 'Holly Jackson',
        price: 299,
        image: goodgirl,
        rating: 4.5
      },
      3: {
        id: 5,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 399,
        image: silent,
        rating: 4.4
      },
      4: {
        id: 3,
        title: 'Powerless',
        author: 'Lauren Roberts',
        price: 399,
        image: powerless,
        rating: 4.7
      },
      5: {
        id: 4,
        title: 'Divine Rivals',
        author: 'Rebecca Ross',
        price: 349,
        image: divine,
        rating: 4.6
      }
    };
    
    // Get 4 related products excluding the current one
    return Object.values(mockProducts)
      .filter(item => item.id !== parseInt(id))
      .slice(0, 4);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#B4846C]"></div>
          <p className="text-[#B4846C] mt-4 font-medium">Loading book details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
          <svg className="mx-auto h-16 w-16 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link to="/" className="inline-block bg-[#B4846C] text-white px-4 py-2 rounded-lg hover:bg-[#967259] transition-colors duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
          <svg className="mx-auto h-16 w-16 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-4">The book you're looking for doesn't exist in our library.</p>
          <Link to="/" className="inline-block bg-[#B4846C] text-white px-4 py-2 rounded-lg hover:bg-[#967259] transition-colors duration-200">
            Browse Our Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#B4846C]">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="/books" className="text-sm font-medium text-gray-700 hover:text-[#B4846C]">
                  Books
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-sm font-medium text-gray-500 truncate max-w-xs">
                  {product.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 border transition-all duration-200 ${
                      selectedImage === index 
                        ? 'ring-2 ring-[#B4846C] border-[#B4846C]' 
                        : 'border-gray-200 hover:border-[#B4846C]/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-1">
                  {product.inStock ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      In Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Out of Stock
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-xl text-gray-600 flex items-center">
                  <UserIcon className="h-5 w-5 mr-1 text-gray-400" />
                  by <span className="ml-1 font-medium text-[#B4846C] hover:underline cursor-pointer">{product.author}</span>
                </p>
              </div>

              <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(product.rating) ? (
                        <StarSolidIcon className="h-5 w-5 text-yellow-400" />
                      ) : i < product.rating ? (
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <StarIcon className="h-5 w-5 text-gray-300" />
                      )}
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.numReviews} reviews)
                  </span>
                </div>
              </div>

              <div className="border-t border-b py-4 space-y-3">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{(product.price).toFixed(2)}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span className="ml-3 text-lg text-gray-500 line-through">
                      ₹{(product.originalPrice ).toFixed(2)}
                      </span>
                      <span className="ml-2 text-red-600 font-medium">
                        Save ₹{((product.originalPrice - product.price)).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <TruckIcon className="h-5 w-5 text-green-500 mr-1" />
                  {product.shipping.freeShipping 
                    ? "Free shipping" 
                    : "Standard shipping rates apply"}
                  {product.shipping.expressAvailable && (
                    <span className="ml-1">
                      (Express delivery available)
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex border rounded-md">
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 border-r text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                    <button
                      type="button"
                      disabled={quantity >= product.stockCount}
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="px-3 py-2 border-l text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.stockCount} items available
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#B4846C] text-white px-6 py-3 rounded-md font-medium hover:bg-[#967259] transition-colors duration-200 flex items-center justify-center"
                  >
                    <ShoppingCartIcon className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={handleWishlist}
                    className={`flex-0 px-4 py-3 rounded-md font-medium transition-colors duration-200 border flex items-center justify-center ${
                      isWishlisted
                        ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {isWishlisted ? (
                      <HeartSolidIcon className="h-5 w-5" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Product Details Accordion */}
              <div className="border rounded-lg overflow-hidden divide-y">
                <div>
                  <button
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleSection('details')}
                  >
                    <span className="font-medium text-gray-900">Book Details</span>
                    {expandedSections.details ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedSections.details && (
                    <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <BookOpenIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium mr-1">Pages:</span> {product.pages}
                        </div>
                        <div className="flex items-center">
                          <TagIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium mr-1">ISBN:</span> {product.isbn}
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium mr-1">Published:</span> {product.publishDate}
                        </div>
                        <div className="flex items-center">
                          <LanguageIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium mr-1">Language:</span> {product.language}
                        </div>
                        <div className="flex items-center">
                          <PencilSquareIcon className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="font-medium mr-1">Publisher:</span> {product.publisher}
                        </div>
                      </div>
                      <div className="pt-2">
                        <span className="font-medium">Genre: </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.genre.map((genre, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#F6EEE0] text-[#B4846C]"
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      {product.awards.length > 0 && (
                        <div className="pt-2">
                          <span className="font-medium">Awards: </span>
                          <ul className="list-disc list-inside mt-1 ml-1 space-y-1">
                            {product.awards.map((award, index) => (
                              <li key={index}>{award}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleSection('shipping')}
                  >
                    <span className="font-medium text-gray-900">Shipping Information</span>
                    {expandedSections.shipping ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedSections.shipping && (
                    <div className="px-4 pb-4 text-sm text-gray-600 space-y-3">
                      <p className="flex items-center">
                        <TruckIcon className="h-5 w-5 text-gray-400 mr-2" />
                        Estimated delivery: {product.shipping.estimatedDelivery}
                      </p>
                      {product.shipping.freeShipping && (
                        <p className="flex items-center">
                          <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
                          Free shipping on this item
                        </p>
                      )}
                      {product.shipping.expressAvailable && (
                        <p className="flex items-center">
                          <ArrowPathIcon className="h-5 w-5 text-blue-500 mr-2" />
                          Express delivery available for an additional fee
                        </p>
                      )}
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleSection('returns')}
                  >
                    <span className="font-medium text-gray-900">Returns Policy</span>
                    {expandedSections.returns ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedSections.returns && (
                    <div className="px-4 pb-4 text-sm text-gray-600 space-y-2">
                      {product.returns.returnable ? (
                        <>
                          <p>This item can be returned within {product.returns.period} of delivery.</p>
                          <p>Return condition: {product.returns.condition}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            For complete return policy details, please refer to our Returns Policy page.
                          </p>
                        </>
                      ) : (
                        <p>This item cannot be returned.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for Description, Plot, About Author */}
          <div className="px-6 md:px-8 pb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-[#B4846C] text-[#B4846C]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('plot')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'plot'
                      ? 'border-[#B4846C] text-[#B4846C]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Plot
                </button>
                <button
                  onClick={() => setActiveTab('author')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'author'
                      ? 'border-[#B4846C] text-[#B4846C]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  About the Author
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-[#B4846C] text-[#B4846C]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            <div className="py-6">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <div className="mt-4 pt-4 border-t">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'plot' && (
                <div className="prose max-w-none">
                  <div className="flex items-center mb-4">
                    <InformationCircleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                    <p className="text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                      This section may contain mild spoilers about the book's premise.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.plot}</p>
                </div>
              )}
              
              {activeTab === 'author' && (
                <div className="prose max-w-none">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">About {product.author}</h3>
                  <p className="text-gray-700 leading-relaxed">{product.aboutAuthor}</p>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarSolidIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.round(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-gray-700">
                      Based on {product.numReviews} reviews
                    </p>
                  </div>
                  
                  <div className="space-y-8">
                    {product.reviews.map((review, index) => (
                      <div key={index} className="border-b pb-6">
                        <div className="flex items-center mb-1">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <StarSolidIcon
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm font-medium text-gray-900">
                            {review.title}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span className="font-medium text-gray-700">{review.user}</span>
                          <span className="mx-1">•</span>
                          <span>{new Date(review.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                to={`/product/${relatedProduct.id}`}
                className="group"
              >
                <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base font-medium text-gray-900 group-hover:text-[#B4846C] transition-colors duration-200 line-clamp-2">
                  {relatedProduct.title}
                </h3>
                <p className="text-sm text-gray-500">{relatedProduct.author}</p>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(relatedProduct.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">
                    ({relatedProduct.rating})
                  </span>
                </div>
                <p className="mt-2 font-medium text-gray-900">
                  ₹{(relatedProduct.price).toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;