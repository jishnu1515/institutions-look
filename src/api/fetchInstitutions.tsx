type FetchInstitutionsArg = {
    searchTerm: string;
    minLengthToSearch: number;
    maxItems: number;
};

const fetchInstitutions = ({ searchTerm, minLengthToSearch, maxItems }: FetchInstitutionsArg): Promise<string[]> => {
    if (searchTerm.length < minLengthToSearch) {
        return Promise.resolve([]);
    }
    const params = new URLSearchParams({ name: searchTerm, count: maxItems.toString() });
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}?${params}`).then((response) => response.json());
};

export default fetchInstitutions;
