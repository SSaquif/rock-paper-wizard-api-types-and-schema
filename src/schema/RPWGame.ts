// Change this to RPWGame
export interface RPWGame {
  game_id: string;
  created_at: Date | string;
  updated_at: Date | string;
  password: string;
  game_status: "creating" | "ongoing" | "completed";
  number_of_players: 2 | 3 | 4 | 5 | 6;
  current_round: number;
  player_1: string;
  player_2: string | null;
  player_3: string | null;
  player_4: string | null;
  player_5: string | null;
  player_6: string | null;
  round_starter:
    | RPWGame["player_1"]
    | RPWGame["player_2"]
    | RPWGame["player_3"]
    | RPWGame["player_4"]
    | RPWGame["player_5"]
    | RPWGame["player_6"];
  player_1_points: number;
  player_2_points: number | null;
  player_3_points: number | null;
  player_4_points: number | null;
  player_5_points: number | null;
  player_6_points: number | null;
  player_1_position: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  player_2_position: number | null;
  player_3_position: number | null;
  player_4_position: number | null;
  player_5_position: number | null;
  player_6_position: number | null;
  player_order: string[];
}
