// Task 2.1
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
// Usage
getPromise()
    .then((data) => {
    console.log(data);
});
// The compare function
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
// Usage
const result = compare({ name: 'Max', color: 'blue' }, { position: 1, weight: 100 });
console.log(result); // { name: 'Max', position: 1, color: 'blue', weight: 100 }
// Task 2.3
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    render() {
        console.log(this.props.title);
    }
}
// Usage
const page = new Page({ title: 'Home' });
page.render(); // Home
// Usage
const pair1 = { key: 1, value: 'First' };
const pair2 = { key: 'second', value: true };
function createOrUpadeUsr(user) {
    return user;
}
// Usage
const user = createOrUpadeUsr({ name: 'Max' });
const user2 = createOrUpadeUsr({ name: 'Max', surname: 'Smith' });
const user3 = createOrUpadeUsr({ email: 'pppp@wp.pl', password: '1234' });
// Task 2.7
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["quest"] = "quest";
})(UserRole || (UserRole = {}));
const roleDescription = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.quest]: 'Quest User',
};
const formParams = {
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
};
