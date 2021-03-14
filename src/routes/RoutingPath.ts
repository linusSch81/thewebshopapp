const homeView = "/";
const aboutView = "/about";
const signInView = "/login";

const newsView = "/news";
const shopView = "/shop";

const userProfileView = "/user/profile";
const departmentView = "/department";
const categoryView = "/category";
const subCategoryView = "/sub-category";
const productView = "/product";

const backPacksView = "/backpacks";

const testView = "/test";
const testApi1View = "/test-api-1";
const testApi2View = "/test-api-2";
const testApi3View = "/test-api-3";

const testApi4View = "/test-api-4";
const testApi4DetailsView = (name?: string) => {
	//return name ? `/pokemon/${name}` : "/pokemon/:name";
	return name ? `${testApi4View}/${name}` : "/:testApi4View/:name";
};

const testApi5View = "/test-api-5";
const testApi6View = "/test-api-6";
const testApi7View = "/test-api-7";
const adminUsersView = "/admin/users";

const accessoriesView = "/accessories";
const brandsView = "/brands";
const expertiseView = "/expertise";

const logger = {
	homeView,
	aboutView,
	signInView,

	newsView,
	shopView,

	userProfileView,
	departmentView,
	categoryView,
	subCategoryView,
	productView,

	backPacksView,

	testView,
	testApi1View,
	testApi2View,
	testApi3View,
	testApi4View,
	testApi4DetailsView,
	testApi5View,
	testApi6View,
	testApi7View,
	adminUsersView,

	accessoriesView,
	brandsView,
	expertiseView,
};
export default logger;
