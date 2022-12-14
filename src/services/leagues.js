import axios from "axios";

export const getLeagues = async () => {
  try {
    const response = await axios.get(
      "https://soccer-standings-api-production.up.railway.app/leagues"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getLeague = async (id) => {
//   try {
//     const response = await axios.get(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createLeague = async (leagueData) => {
//   try {
//     const response = await axios.post(
//       "https://soccer-standings-api-production.up.railway.app/leagues",
//       leagueData
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateLeague = async (id, leagueData) => {
//   try {
//     const response = await axios.put(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`,
//       leagueData
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteLeague = async (id) => {
//   try {
//     const response = await axios.delete(
//       `https://soccer-standings-api-production.up.railway.app/leagues/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
