import CategoryJob from "../CategoryJob/CategoryJob";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomeBanner from "../HomeBanner/HomeBanner";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryJob></CategoryJob>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;