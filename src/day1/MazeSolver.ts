type Visited = Point[];

// export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
export default function solve(...args: [maze: string[], wall: string, start: Point, end: Point]): Point[] {
  const visited: Point[] = [];
  const visitedResult = findPath(...args, visited) as Visited;

  return visitedResult;
}

function findPath(maze: string[], wall: string, current: Point, end: Point, visited: Visited, debug?: string): Visited | undefined {
  const visitedClone = global.structuredClone(visited);
  // const visitedClone = [...visited];

  // console.log(debug);
  // console.log(`x: ${current.x}, y: ${current.y}`);

  if (
    isOutOfBounds(current, maze)
    || isAlreadyVisited(current, visitedClone)
    || isWall(current, maze, wall)
  ) {
    return;
  }

  visitedClone.push(current);

  if (arePointsEqual(current, end)) {
    return visitedClone;
  }

  // // if we needed to return all viable paths
  // const nextRound = {
  //   up: findPath(maze, wall, moveUp(current), end, visitedClone, 'moveUp'),
  //   right: findPath(maze, wall, moveRight(current), end, visitedClone, 'moveRight'),
  //   down: findPath(maze, wall, moveDown(current), end, visitedClone, 'moveDown'),
  //   left: findPath(maze, wall, moveLeft(current), end, visitedClone, 'moveLeft'),
  // }
  // return Object.values(nextRound).filter(Boolean);

  return findPath(maze, wall, moveUp(current), end, visitedClone, 'moveUp')
    || findPath(maze, wall, moveRight(current), end, visitedClone, 'moveRight')
    || findPath(maze, wall, moveDown(current), end, visitedClone, 'moveDown')
    || findPath(maze, wall, moveLeft(current), end, visitedClone, 'moveLeft');
}

function isOutOfBounds(point: Point, maze: string[]): boolean {
  const {x, y} = point;
  if (x < 0 || x >= maze[0].length) {
    return true;
  }
  if (y < 0 || y >= maze.length) {
    return true;
  }

  return false;
}

function isWall(point: Point, maze: string[], wall: string): boolean {
  return getPointValue(point, maze) === wall;
}

function isAlreadyVisited(point: Point, visited: Visited): boolean {
  const {x, y} = point;
  return visited.some((prevPoint) => {
    return x === prevPoint.x && y === prevPoint.y;
  })
}

function getPointValue(point: Point, maze: string[]): string {
  const {x, y} = point;
  return maze[y].charAt(x);
}

function arePointsEqual(pointA: Point, pointB: Point): boolean {
  return pointA.x === pointB.x && pointA.y === pointB.y;
}

function moveUp(point: Point): Point {
  const {x, y} = point;
  return {
    x,
    y: y - 1,
  }
}

function moveRight(point: Point): Point {
  const {x, y} = point;
  return {
    x: x + 1,
    y,
  }
}

function moveDown(point: Point): Point {
  const {x, y} = point;
  return {
    x,
    y: y + 1,
  }
}

function moveLeft(point: Point): Point {
  const {x, y} = point;
  return {
    x: x - 1,
    y,
  }
}