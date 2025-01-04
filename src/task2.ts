// Task 2.1

function getPromise<T extends (string | number)[]>() {
    return new Promise<T>((resolve) => {
      resolve(['Text', 50] as T);
    });
  }
  
  // Usage
  getPromise<[string, number]>()
    .then((data) => {
      console.log(data); 
    });

// Task 2.2
type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  // The compare function
  function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
    top: T,
    bottom: U
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
    // Usage
    const result = compare(
    { name: 'Max', color: 'blue' },
    { position: 1, weight: 100 }
  );
    console.log(result); // { name: 'Max', position: 1, color: 'blue', weight: 100 }

// Task 2.3

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

// Task 2.4

interface PagePrips {
    title: string;
}

class Component<T> {
    constructor(public props: T) {}
}

class Page extends Component<PagePrips> {
    render() {
        console.log(this.props.title);
    }
}

// Usage
const page = new Page ({ title: 'Home' });
page.render(); // Home

// Task 2.5

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

// Usage
const pair1: KeyValuePair<number, string> = { key: 1, value: 'First' };
const pair2: KeyValuePair<string, boolean> = { key: 'second', value: true };


// Task 2.6

type User = {
    name: string; 
    surname: string;
    email: string;
    password: string;
}; 

function createOrUpadeUsr(user: Partial<User>) {
    return user; 
}

// Usage
const user = createOrUpadeUsr({ name: 'Max' });
const user2 = createOrUpadeUsr({ name: 'Max', surname: 'Smith' });
const user3 = createOrUpadeUsr({email: 'pppp@wp.pl', password: '1234'});

// Task 2.7
export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    quest = 'quest',
}

const roleDescription : Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.quest]: 'Quest User',
};

// Task 2.8

type Error = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
};

type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Error;
};

type Params = Omit<Form, 'errors'>;

const formParams: Params = {
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
};


