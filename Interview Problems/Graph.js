const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

const depthFirstPrintRecursive = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
}

const BFSPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}

const hasPathDFSSolution = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDFSSolution(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
}

const convertEdgeListToAdjacencyList = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    if (!graph[a]) {
      graph[a] = []
    }
    if (!graph[b]) {
      graph[b] = []
    }
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

const hasPathDFSUndirected = (graph, src, dest, visited = new Set()) => {
  if (src === dst) return true;
  
  if(visited.has(src)) return false;

  visited.add(src);

  for (const neighbor of graph[src]) {
    if(hasPathDFSUndirected(graph, neighbor, dst, visited)){
      return true;
    }
  }

  return false;
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

// depthFirstPrint(graph, 'a'); //acebdf
// depthFirstPrintRecursive(graph, 'a') //abdfce;
// BFSPrint(graph, 'a'); //abcdef
// console.log(hasPathDFSSolution(graph, 'a', 'f'));



//Connected Component Problem
// const connectedComponentsCount = (graph) => {
//   // todo
//   const visited = new Set();
//   let count = 0;
//   for(const node in graph){
//     if(explore(graph, node, visited)){
//       count++;
//     }
//   }
  
//   return count;
// };

// const explore = (graph, src, visited) => {
//   if(visited.has(String(src))){
//     return false;
//   } 
//   visited.add(String(src));
  
//   for(const neighbour of graph[src]){
//     explore(graph, neighbour, visited);
//   }
//   return true;
// }

// Largest component
// const largestComponent = (graph) => {
//   const visited = new Set();
//   let largestCount = 0;
//   for(const node in graph){
//    const count =  explore(graph, node, visited);
//     if(count > largestCount){
//       largestCount = count;
//     }
//   }
//   return largestCount
// };

// const explore = (graph, src, visited) => {
//   if(visited.has(src)) return 0;
//   visited.add(src);

//   let size = 1;
//   for(const neightbour of graph[src]){
//     size += explore(graph, neightbour, visited)
//   }
//   return size;
// }

// console.log(largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2']
// })); // 4


// Shortest path BFS
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  const queue = [[nodeA , 0]];
  
  while(queue.length > 0){
    const [current, distance] = queue.shift();
    
    if(current === nodeB){
       return distance;
    }
    
    
    for(const neighbour of graph[current]){
        if(!visited.has(String(neighbour))){
          visited.add(String(neighbour));
          queue.push([neighbour, distance + 1])
        }
    }
    
  }

  return -1;
};

const buildGraph = (edges) => {
  const graph = {};
  
  for(const [a,b] of edges){
   if(!graph[a]) graph[a] = [];
   if(!graph[b]) graph[b] = [];
    
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'w', 'z'));