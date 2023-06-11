import BlogList from '../BlogList'

import UserInfo from '../UserInfo'

import './index.css'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
