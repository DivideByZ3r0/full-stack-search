import { z } from "zod";

const searchAllDto = z.object({
    searchTerm: z.string().min(1, "Search term must not be empty"),
});

export default searchAllDto;