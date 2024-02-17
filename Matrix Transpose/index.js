function transpose(matrix) {
  //get the number of rows and columns in the original matrix
  let rows = matrix.length;
  let cols = matrix[0].length;

  //Number of rows are going into the number of cols in the Matrix called transposed.  This Matrix has no values yet
  const transposed = Array.from({ length: cols }, () =>
    Array.from({ length: rows })
  );

  //Fill the transpose
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }
  console.log(transposed);
}

/*finding the transpose of a matrix is a new matrix formed by swapping the rows and columns of the 
  original matrix*/

//create a new matrix to store the transpose
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
transpose(matrix);
